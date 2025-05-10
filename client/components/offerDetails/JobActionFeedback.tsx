import { Modal, View, Text, Pressable } from 'react-native';
import { useState } from 'react';

interface JobActionFeedbackProps {
  text: string;
  styles: string;
  action: (setMessage: (message: string) => void, type: string) => void;
  type: string;
  navigation:any
}

export default function JobActionFeedback({
  text,
  styles,
  action,
  type,
  navigation
}: JobActionFeedbackProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState<string>();

  const handleShowModal = async () => {
    action(setMessage, type);
    setModalVisible(true);
    setTimeout(() => {
      navigation.navigate('Tabs', {
        screen: 'Matches',
      });
      setModalVisible(false);
    }, 2000);
  };

  return (
    <View className="h-[80%] w-[40%] m-[5px]">
      <Pressable
        onPress={handleShowModal}
        className={`border-[1px] border-[lightgray] h-full w-full rounded-[5px] ${styles} justify-center items-center`}
      >
        <Text className="text-[lightgray] text-[18px]">{text}</Text>
      </Pressable>

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-start items-end mt-[60px] ">
          <View className="bg-[lightgreen] p-4 rounded-lg shadow-lg w-[50%] items-center">
            <Text className="text-[14px] font-bold mb-2 text-white">
              {message}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
