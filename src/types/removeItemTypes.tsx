export interface ItemCardProps {
  titleAlert?: string;
  subtitleAlert?: string;
  titleCard: string;
  subtitleCard?: string;
  id: string;
  touchable?: boolean;
  modalVisible?: boolean;
  removeItem?: (e: string) => void;
  setModalVisible?: (e: boolean) => void;
}
