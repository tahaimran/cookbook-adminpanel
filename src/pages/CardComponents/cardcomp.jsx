import React from "react";
import "./cardcomp.css";

import { Link, useNavigate } from "react-router-dom";

function Cardcomp() {
  let history = useNavigate();

  const RecipCall = () => {
    history("/addRecipe");
  };

  return (
    <div className="cardCompMain">
      <div className="main_card">
        <div className="main-paper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 512 512"
            className="svg"
            // color="#cf4307"
          >
            <path
              fill="currentColor"
              d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512zm-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
            />
          </svg>
          <div className="bottom-paper ">
            <p>
              Create a fresh recipe by clicking the 'Add New Recipe' button
              located below. It's your starting point for adding a new culinary
              masterpiece to your collection
            </p>
            <button className="button_d" onClick={RecipCall}>Add</button>
          </div>
        </div>
      </div>
      <div className="main_card">
        <div className="main-paper">
          <svg
            class="svg"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            color="#cf4307"
          >
            <path
              d="M128 512a42.666667 42.666667 0 0 0 42.666667 42.666667h256a42.666667 42.666667 0 0 0 42.666666-42.666667V170.666667a42.666667 42.666667 0 0 0-42.666666-42.666667H170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v341.333333z m85.333333-298.666667h170.666667v256H213.333333V213.333333zM128 896a42.666667 42.666667 0 0 0 42.666667 42.666667h256a42.666667 42.666667 0 0 0 42.666666-42.666667v-213.333333a42.666667 42.666667 0 0 0-42.666666-42.666667H170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v213.333333z m85.333333-170.666667h170.666667v128H213.333333v-128z m341.333334 170.666667a42.666667 42.666667 0 0 0 42.666666 42.666667h256a42.666667 42.666667 0 0 0 42.666667-42.666667v-341.333333a42.666667 42.666667 0 0 0-42.666667-42.666667h-256a42.666667 42.666667 0 0 0-42.666666 42.666667v341.333333z m85.333333-298.666667h170.666667v256h-170.666667v-256zM554.666667 170.666667v213.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h256a42.666667 42.666667 0 0 0 42.666667-42.666667V170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667h-256a42.666667 42.666667 0 0 0-42.666666 42.666667z m85.333333 42.666666h170.666667v128h-170.666667V213.333333z"
              fill=""
            />
          </svg>
          <div className="bottom-paper">
          <p>
          Click the 'View All' button below to explore a comprehensive list of categories and discover new recipes. It's your gateway to a world of culinary inspiration
          </p>
            <Link  className="link_color"  to="/category">
              <button className="button_d" >View All</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_card">
        <div className="main-paper">
          <svg
            class="svg"
            width="100"
            height="100"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            color="#cf4307"
          >
            <path d="M209.886336 281.6C209.886336 267.4688 221.406336 256 235.614336 256L650.436736 256C664.644736 256 676.164736 267.3664 676.164736 281.6 676.164736 295.7312 664.644736 307.2 650.436736 307.2L235.614336 307.2C221.406336 307.2 209.886336 295.8336 209.886336 281.6ZM209.886336 435.2C209.886336 421.0688 221.508736 409.6 235.972736 409.6L572.356736 409.6C586.769536 409.6 598.443136 420.9664 598.443136 435.2 598.443136 449.3312 586.820736 460.8 572.356736 460.8L235.972736 460.8C221.559936 460.8 209.886336 449.4336 209.886336 435.2ZM209.886336 588.8C209.886336 574.6688 221.687936 563.2 235.665536 563.2L443.153536 563.2C457.387136 563.2 468.932736 574.5664 468.932736 588.8 468.932736 602.9312 457.131136 614.4 443.153536 614.4L235.665536 614.4C221.431936 614.4 209.886336 603.0336 209.886336 588.8ZM625.758336 957.44C620.510336 962.6624 607.275136 968.0896 599.825536 968.0896L546.705536 968.0896C546.731136 968.0896 546.628736 968.0128 546.628736 967.8336L546.628736 914.944C546.628736 907.3664 552.055936 894.3104 557.380736 889.0112L874.999936 573.824C874.974336 573.8752 874.974336 573.8752 874.974336 573.8752L943.710336 641.9712C943.838336 642.0992 943.838336 642.0992 943.735936 642.176L625.758336 957.44ZM662.443136 993.5872 980.446336 678.3232C1000.747136 658.2016 1000.619136 625.8688 980.395136 605.824L911.659136 537.728C891.460736 517.6832 858.539136 517.6064 838.315136 537.7024L520.670336 852.8896C505.643136 867.8144 494.839936 893.8752 494.839936 914.944L494.839936 967.8336C494.839936 996.1984 518.007936 1019.2896 546.705536 1019.2896L599.825536 1019.2896C621.022336 1019.2896 647.467136 1008.4352 662.443136 993.5872ZM909.303936 435.2 909.303936 102.4C909.303936 45.8496 862.916736 0 805.675136 0L132.190336 0C74.948736 0 28.561536 45.8496 28.561536 102.4L28.561536 921.6C28.561536 978.1504 74.948736 1024 132.164736 1024L417.118336 1024C431.428736 1024 443.025536 1012.5312 443.025536 998.4L443.025536 998.4C443.025536 984.2688 431.428736 972.8 417.118336 972.8L132.190336 972.8C103.671936 972.8 80.375936 949.76 80.375936 921.6L80.375936 102.4C80.375936 74.112 103.569536 51.2 132.164736 51.2L805.675136 51.2C834.167936 51.2 857.489536 74.24 857.489536 102.4L857.489536 435.2C857.489536 449.3312 869.086336 460.8 883.396736 460.8L883.396736 460.8C897.707136 460.8 909.303936 449.3312 909.303936 435.2Z" />
          </svg>
          <div className="bottom-paper">
            
            <p>
              Click the Add Submit button below to suggest and create a new
              recipe. Share your culinary ideas and contribute to our collection
              of delicious dishes.
            </p>
            <Link className="link_color" to="/submit">
              <button className="button_d">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardcomp;
