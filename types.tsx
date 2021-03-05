export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera:undefined,
  Chat: undefined;
  Status: undefined;
  Calls:undefined;

};

export type TabCameraParamList = {
  TabCameraScreen: undefined;
};

export type TabChatParamList = {
  TabChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
   id:string,
   name:string,
   imageUri:string
}

export type Message = {
  id:string,
  createdAt:string,
  content:string
}

export type ChatRoom = {
  id:string,
  users:[User],
  lastMessage:Message
}
