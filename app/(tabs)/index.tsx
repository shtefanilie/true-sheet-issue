import React, { useRef } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView as RNScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TrueSheet } from '@lodev09/react-native-true-sheet';

interface ListItemData {
  id: string;
  title: string;
  subtitle?: string;
}

const singleListData: ListItemData[] = [
  { id: '1', title: 'Item 1', subtitle: 'Description for item 1' },
  { id: '2', title: 'Item 2', subtitle: 'Description for item 2' },
  { id: '3', title: 'Item 3', subtitle: 'Description for item 3' },
  { id: '4', title: 'Item 4', subtitle: 'Description for item 4' },
  { id: '5', title: 'Item 5', subtitle: 'Description for item 5' },
  { id: '6', title: 'Item 6', subtitle: 'Description for item 6' },
  { id: '7', title: 'Item 7', subtitle: 'Description for item 7' },
  { id: '8', title: 'Item 8', subtitle: 'Description for item 8' },
  { id: '9', title: 'Item 9', subtitle: 'Description for item 9' },
  { id: '10', title: 'Item 10', subtitle: 'Description for item 10' },
  { id: '11', title: 'Item 11', subtitle: 'Description for item 11' },
  { id: '12', title: 'Item 12', subtitle: 'Description for item 12' },
  { id: '13', title: 'Item 13', subtitle: 'Description for item 13' },
  { id: '14', title: 'Item 14', subtitle: 'Description for item 14' },
  { id: '15', title: 'Item 15', subtitle: 'Description for item 15' },
  { id: '16', title: 'Item 16', subtitle: 'Description for item 16' },
  { id: '17', title: 'Item 17', subtitle: 'Description for item 17' },
  { id: '18', title: 'Item 18', subtitle: 'Description for item 18' },
  { id: '19', title: 'Item 19', subtitle: 'Description for item 19' },
  { id: '20', title: 'Item 20', subtitle: 'Description for item 20' },
  { id: '21', title: 'Item 21', subtitle: 'Description for item 21' },
  { id: '22', title: 'Item 22', subtitle: 'Description for item 22' },
  { id: '23', title: 'Item 23', subtitle: 'Description for item 23' },
  { id: '24', title: 'Item 24', subtitle: 'Description for item 24' },
  { id: '25', title: 'Item 25', subtitle: 'Description for item 25' },
];

export default function HomeScreen() {
  const singleListSheetRef = useRef<TrueSheet>(null);

  const handleOpenSingleList = () => {
    singleListSheetRef.current?.present();
  };

  const handleCloseSheet = () => {
    singleListSheetRef.current?.dismiss();
  };

  return (
    <>
      <RNScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleOpenSingleList}>
            <Text style={styles.buttonText}>Open Single List Sheet</Text>
          </Pressable>
        </View>
      </RNScrollView>

      {/* Single List TrueSheet */}
      <TrueSheet
        scrollable
        ref={singleListSheetRef}
        detents={[0.6]}
        cornerRadius={24}
        grabber={false}
        dismissible={false}
        header={
          <View style={styles.sheetHeader}>
            <Text style={styles.headerTitle}>Single List</Text>
            <Pressable
              onPress={handleCloseSheet}
              testID="close-single-list-sheet"
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </Pressable>
          </View>
        }
        footer={
          <View style={styles.footer}>
            <Pressable
              style={styles.footerButton}
              onPress={handleCloseSheet}
              testID="single-list-confirm"
            >
              <Text style={styles.footerButtonText}>Confirm Selection</Text>
            </Pressable>
          </View>
        }
      >
        <FlatList
          nestedScrollEnabled
          data={singleListData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                console.log('Pressed', item.id);
              }}
              testID={`single-list-item-${item.id}`}
            >
              <Text style={styles.listItem}>{item.title}</Text>
            </Pressable>
          )}
          contentContainerStyle={styles.list}
        />
      </TrueSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  buttonContainer: {
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#00A870',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    flex: 1,
    textAlign: 'center',
  },
  closeButton: {
    padding: 4,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#1A1A1A',
  },
  list: {
    paddingBottom: 16,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    padding: 4,
  },
  footerButton: {
    backgroundColor: '#0057A0',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
