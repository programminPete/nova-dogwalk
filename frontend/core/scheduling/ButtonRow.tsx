import { ProfileImage } from "components/ProfileImage";
import { ReactElement, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppStackRoutes } from "navigation/routes";
import { ConfirmModal } from "components/ConfirmModal";

/**
 * @note - Making assumption here thatat a higher level we derived
 *  if the booking is ours or another user,
 * simplifies logic to a switch statement
 */
export enum BookingStatus {
  AVAILABLE = "Available",
  BOOKED = "Booked",
  USER_BOOKED = "User_Booked", // current user
}

interface Props {
  appointmentId?: string;
  dogName?: string;
  status: BookingStatus;
  timeSlot: string;
}

interface ActionSwitchRendererProps {
  status: BookingStatus;
  appointmentId?: string;
  timeSlot: string;
  handleClickCancel: () => void;
}

export function BookingRow({
  status,
  timeSlot,
  dogName,
  appointmentId,
}: Props): ReactElement {
  const [cancelModalEnabled, setCancelModalEnabled] = useState(false);

  const handleCloseModal = () => {
    setCancelModalEnabled(false);
  };

  const handleConfirmCancelBooking = () => {};

  const handleInitCancelBooking = () => {
    setCancelModalEnabled(true);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text>{timeSlot}</Text>
          <ActionSwitchRenderer
            status={status}
            appointmentId={appointmentId}
            timeSlot={timeSlot}
            handleClickCancel={handleInitCancelBooking}
          />
        </View>
        {status === BookingStatus.USER_BOOKED && (
          <View style={styles.dogDisplayRow}>
            <ProfileImage imageUrl={require("assets/default-dog-image.png")} />
            <Text>{`Your dog ${dogName} is booked for a walk!`}</Text>
          </View>
        )}
      </View>

      <ConfirmModal
        enabled={cancelModalEnabled}
        handleConfirm={handleConfirmCancelBooking}
        handleCancel={handleCloseModal}
        title="Are you sure you'd like to cancel this booking?"
      />
    </>
  );
}

function ActionSwitchRenderer({
  status,
  appointmentId,
  timeSlot,
  handleClickCancel,
}: ActionSwitchRendererProps): ReactElement {
  const { navigate } = useNavigation();

  const handleClickBook = () => {
    navigate(AppStackRoutes.CONFIRM_BOOKING, {
      timeSlot,
    });
  };

  switch (status) {
    case BookingStatus.AVAILABLE:
      return <Button type='primary' title='Book' onPress={handleClickBook} />;
    case BookingStatus.BOOKED:
      return <Text style={styles.bookedText}>Booked</Text>;
    case BookingStatus.USER_BOOKED:
      return (
        <Button type='secondary' title='Cancel' onPress={handleClickCancel} />
      );
    default:
      throw Error(
        `BookingRow - ActionSwitchRenderer - unhandled case: ${status}, ${appointmentId}`
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dogDisplayRow: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  bookedText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});
