import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms } = this.context;
    const rooms = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <div className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </div>
    );
  }
}

export default FeaturedRooms;
