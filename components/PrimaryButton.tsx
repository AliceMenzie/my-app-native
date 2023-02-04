import { Button } from "native-base";

interface PrimaryButtonProps {
  children: any;
  onPress: any;
  bg: string
}
const PrimaryButton = ({ children, bg, onPress }: PrimaryButtonProps) => {
  return (
    <Button bg={bg} onPress={onPress}>
      {children}
    </Button>
  );
};
export default PrimaryButton;
