import { Box, Button, View } from "native-base";
import PrimaryButton from "../../components/PrimaryButton";

interface SignOutProps {
  setIsSignedIn: any;
}

const SignOut = ({ setIsSignedIn }: SignOutProps) => {
  const handleSignOut = () => {
    setIsSignedIn(false);
  };
  return (
    <Box
      safeArea
      flex={1}
      width="100%"
      height="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      bg={{
        linearGradient: {
          colors: ["#f97d5b", "#e1b07e"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    >
      <View alignItems="center" justifyContent="center" flexDirection="row">
        <PrimaryButton bg="#2e3138" onPress={handleSignOut}>Sign Out</PrimaryButton>
      </View>
    </Box>
  );
};
export default SignOut;
