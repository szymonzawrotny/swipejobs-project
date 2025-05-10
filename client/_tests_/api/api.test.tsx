const request = require('supertest');
const API_URL = 'https://test.swipejobs.com/api'; 

const workerId = '7f90df6e-b832-44e2-b624-3143d428001f'; 

describe('Worker API Integration Tests', () => {
  it('should retrieve the worker profile', async () => {
    const response = await request(API_URL)
      .get(`/worker/${workerId}/profile`)
      .expect(200); 

    expect(response.body).toHaveProperty('workerId', workerId);
    expect(response.body).toHaveProperty('firstName');
    expect(response.body).toHaveProperty('lastName');
    expect(response.body).toHaveProperty('email');
  });

  it('should retrieve the list of job matches for the worker', async () => {
    const response = await request(API_URL)
      .get(`/worker/${workerId}/matches`)
      .expect(200);

    expect(response.body[0]).toHaveProperty('company');
    expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('jobId');
      expect(response.body[0]).toHaveProperty('jobTitle');
    }
  });

  it('should accept a job', async () => {
    const jobId = '5775d8e18a488e6c5bb08333'; 

    const response = await request(API_URL)
      .get(`/worker/${workerId}/job/${jobId}/accept`)
      .expect(200); 

    expect(response.body).toHaveProperty('success', false);
  });

  it('should reject a job', async () => {
    const jobId = '5775d8e18a488e6c5bb08333'; 

    const response = await request(API_URL)
      .get(`/worker/${workerId}/job/${jobId}/reject`)
      .expect(200);

    expect(response.body).toHaveProperty('success', true);
  });

  it('should return 404 for invalid workerId', async () => {
    const invalidWorkerId = 'invalid-id';

    const response = await request(API_URL)
      .get(`/worker/${invalidWorkerId}/profile`)
      .expect(404); 
  });

  it('should return 404 for invalid jobId when accepting a job', async () => {
    const invalidJobId = 'invalid-job-id';

    const response = await request(API_URL)
      .post(`/worker/${workerId}/job/${invalidJobId}/accept`)
      .expect(403); 
  });

  it('should return 403 for invalid jobId when rejecting a job', async () => {
    const invalidJobId = 'invalid-job-id';

    const response = await request(API_URL)
      .post(`/worker/${workerId}/job/${invalidJobId}/reject`)
      .expect(403); 
  });
});
