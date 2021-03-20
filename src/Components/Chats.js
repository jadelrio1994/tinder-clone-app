import React from "react";
import { Chat } from "./Chat";
import "./Chats.css";

export const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you :)"
        timestamp="40 minutes ago"
        profilePic="https://static1.elcomercio.es/www/multimedia/202007/09/media/cortadas/sarah-jessica-parker-abre-primera-tienda-zapatos-kKCF-U110745396915WAE-624x385@El%20Comercio.jpg"
      />
      <Chat
        name="Ellen"
        message="Whats up?"
        timestamp="55 minutes ago"
        profilePic="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/01/16068545291871.jpg"
      />
      <Chat
        name="Sandra"
        message="Ola"
        timestamp="3 days ago"
        profilePic="https://i.blogs.es/b10991/sandra-bullock-globos-oro-2014-1/450_1000.jpg"
      />
      <Chat
        name="Natash"
        message="Oops there is he is..."
        timestamp="1 week ago"
        profilePic="https://upload.wikimedia.org/wikipedia/en/f/f6/Scarlett_Johansson_as_Black_Widow.jpg"
      />
    </div>
  );
};
