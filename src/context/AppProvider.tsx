import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";

interface ProfileState {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export interface Profile {
  username: string;
  timeonpage: number;
  mouse: {
    x: number;
    y: number;
  };
  viewport: {
    w: number;
    h: number;
  };
}
const defaultProfile: Profile = {
  username: "Anonymous User",
  timeonpage: 0,
  mouse: {
    x: 0,
    y: 0,
  },
  viewport: {
    w: 0,
    h: 0,
  },
};

const defaultProfileState: ProfileState = {
  profile: defaultProfile,
  setProfile: (): void => {},
};

export const ProfileContext = createContext<ProfileState>(defaultProfileState);

interface ProfileContextProviderProps {
  defaults?: Partial<Profile>;
  children?: ReactNode;
}

export const useProfile = (overrides?: Partial<Profile>): ProfileState => {
  const defaultProfile: Profile = {
    username: "Foo",
    timeonpage: 0,
    mouse: { x: 0, y: 0 },
    viewport: { w: 0, h: 0 },
  };

  const [profile, setProfile] = useState<Profile>({
    ...defaultProfile,
    ...overrides,
  });

  return { profile, setProfile };
};

interface ProfileContextProviderProps {
  defaults?: Partial<Profile>;
  children?: ReactNode;
}

export const ProfileContextProvider = (
  props: ProfileContextProviderProps
): ReactElement => {
  const [profile, setProfile] = useState<Profile>({
    ...defaultProfile,
    ...props.defaults,
  });

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

// *** HOOKS ** //

export const useProfileContext = (): ProfileState => {
  return useContext(ProfileContext);
};
