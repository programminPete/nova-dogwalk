import {ReactElement} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {Button} from './Button';

interface Props {
  handleConfirm: () => void;
  handleCancel: () => void;
  title: string;
  description?: string;
  enabled: boolean;
}
export function ConfirmModal({
  handleCancel,
  handleConfirm,
  title,
  description,
  enabled,
}: Props): ReactElement {
  return (
    <Modal animationType="fade" visible={enabled} transparent={true}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>{title}</Text>
          <Text>{description}</Text>
          <Button type="primary" title="Confirm" onPress={handleConfirm} />
          <Button type="secondary" title="Cancel" onPress={handleCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
    gap: 16,
    padding: 20,
    marginHorizontal: 16,
    maxHeight: 200,
    borderRadius: 8,
  },
});
