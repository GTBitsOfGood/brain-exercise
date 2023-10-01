import "react-native-gesture-handler";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthUser } from "../../redux/reducers/authReducer/types";
import { login, logout } from "../../redux/reducers/authReducer";
import SignInScreen from "../SignIn/SignIn";
import NavigationContainerWithTracking from "../../components/NavigationContainerWithTracking";
import Stack from "../Stacks/StackNavigator";
import SignUpScreen from "../SignUp/SignUp";
import PersonalInfoScreen from "../SignUp/PersonalInfo";
import { RootState } from "../../redux/rootReducer";
import { getAnalytics } from "../../firebase/email_signin";
import { updateGame } from "../../redux/reducers/gameDetailsReducer";

type Props = { children: React.ReactNode };

function AuthGuard({ children }: Props) {
  const dispatch = useDispatch();
  const auth = getAuth();
  const userState = useSelector<RootState>((state) => state.auth) as AuthUser;

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        // !! Should add code to get additional info from user from Analytics and check for Personal Info !!
        if (user) {
          getAnalytics(user.email).then((userAnalytics) => {
            const newState: Partial<AuthUser> = {
              ...userAnalytics.user,
              authenticated: true,
            };
            dispatch(login(newState));
            dispatch(updateGame(userAnalytics.gameDetails));
          });
        } else {
          dispatch(logout());
        }
      }),
    [auth, dispatch],
  );

  return (
    <>
      {(userState.authenticated && userState.signedUp && children) ||
        (userState.authenticated && <PersonalInfoScreen />) || (
          <NavigationContainerWithTracking>
            <Stack.Navigator>
              <Stack.Screen
                key={"SignInScreen"}
                name={"SignInScreen"}
                component={SignInScreen}
                options={{
                  title: "Sign In",
                }}
              />
              <Stack.Screen
                key={"SignUpScreen"}
                name={"SignUpScreen"}
                component={SignUpScreen}
                options={{
                  title: "Sign Up",
                }}
              />
            </Stack.Navigator>
          </NavigationContainerWithTracking>
        )}
    </>
  );
}

export default AuthGuard;
