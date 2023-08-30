import React from "react";
import Eventitem from "./Eventitem";
import useSWR from "swr";
import {fetcher} from "./SwrHelper";

export default function Eventlist() {
  const {isLoading, data: events} = useSWR("http://localhost:3333/events", fetcher);

  return (
    <div className="container" id="eventtable">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              events && events.map(event => (
                <Eventitem event={event} key={event.id} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
