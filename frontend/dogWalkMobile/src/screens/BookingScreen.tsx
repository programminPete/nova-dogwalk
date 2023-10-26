import ArrowIcon from 'assets/ArrowIcon';
import BookingSelectionList from 'core/scheduling/UI/BookingSelectionList';
import {formatDate} from 'lib/formatDate';
import {ReactElement, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Pressable, View} from 'react-native';

export function BookingScreen(): ReactElement {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <DateSelectionRow
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <BookingSelectionList selectedDate={selectedDate} />
    </SafeAreaView>
  );
}

interface DateSelectionProps {
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedDate: Date;
}

function DateSelectionRow({
  setSelectedDate,
  selectedDate,
}: DateSelectionProps): ReactElement {
  const formattedDate = formatDate(selectedDate);

  const handlePreviousDate = () => {
    setSelectedDate(
      prevDate => new Date(prevDate.setDate(prevDate.getDate() - 1)),
    );
  };

  const handleNextDate = () => {
    setSelectedDate(
      prevDate => new Date(prevDate.setDate(prevDate.getDate() + 1)),
    );
  };
  return (
    <View style={styles.dateRow}>
      <Text style={styles.headerText}>{formattedDate}</Text>

      <View style={styles.rightSide}>
        <Pressable onPress={handlePreviousDate} style={styles.arrowButton}>
          <ArrowIcon rotation={270} />
        </Pressable>
        <Pressable onPress={handleNextDate} style={styles.arrowButton}>
          <ArrowIcon rotation={90} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 16,
    padding: 4,
    fontWeight: 'bold',
  },
  arrowButton: {
    marginHorizontal: 8,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
});
