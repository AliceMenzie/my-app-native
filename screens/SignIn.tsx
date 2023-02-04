import { Box, View } from "native-base";
import PrimaryButton from "../components/PrimaryButton";

interface SignInProps {
  setIsSignedIn: any;
}

const SignIn = ({ setIsSignedIn }: SignInProps) => {
  const handleSignIn = () => {
    setIsSignedIn(true);
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
          colors: ["#e1b07e", "#f97d5b"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    >
      <View alignItems="center" justifyContent="center" flexDirection="row">
        <PrimaryButton bg="#2e3138" onPress={handleSignIn}>Sign In</PrimaryButton>
      </View>
    </Box>
  );
};
export default SignIn;
