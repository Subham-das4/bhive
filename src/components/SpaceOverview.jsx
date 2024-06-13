import React, { useContext, useEffect, useState } from "react";
import { DataContext, actionTypes } from "./Provider/Provider";

const SpaceOverview = () => {
  const [spaces, setSpaces] = useState([]);
  const { state, dispatch } = useContext(DataContext);
  useEffect(() => {
    dispatch({ type: actionTypes.GET_DATA });
  }, []);
  useEffect(() => {
    if (state.then) state.then((data) => setSpaces(data.spaceOverview));
  }, [state]);

  return (
    <section className="">
      <div className="space_overview layout-width mx-auto py-4 px-3">
        <h2 className="mx-8 hidden lg:grid">Our Space Overview</h2>
        <h2 className="mx-8 lg:hidden">Our Spaces</h2>
        <div className="grid grid-cols-1 py-4 gap-8 md:grid-cols-2 xl:grid-cols-4 place-items-center">
          {spaces.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceOverview;

const Card = ({ data }) => {
  return (
    <section className="card p-4">
      <div className="name flex justify-between">
        <h5>{data.name}</h5> <div><img src="images/direction.png"  width={40} alt="" /></div>
      </div>
      <div
        className="photo aspect-video"
        style={{
          backgroundImage: `url(https://www.subhamdas.info/${data.images[0]})`,
        }}
      ></div>
      <div className="pass grid grid-cols-2 gap-1 ">
        <div className="day_pass flex flex-col  py-2 px-2">
          <span>Day Pass</span>
          <div>
            <span className="price ">₹ {data.day_pass_price}</span>/
            Day
          </div>
        </div>
        <div className="bulk_pass flex flex-col  py-2 px-2">
          <span>Bulk Pass</span>
          <div>
            <span className="prev_price">₹{data.day_pass_price * 10}</span>
            &nbsp;
            <span className="price">
              ₹{" "}
              {calculateDiscount(
                data.day_pass_price * 10,
                data.day_pass_discounts_percentage[10].value
              )}
            </span>
            / 10 Days
          </div>
          <div className="discount"> {data.day_pass_discounts_percentage[10].value}% Discount</div>
        </div>
      </div>
    </section>
  );
};

const calculateDiscount = (price, discount) => {
  return price - price * (discount / 100);
};
