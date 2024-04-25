"use client";
import React from "react";

export default function () {
  return (
    <div className="bg-white z-10 rounded w-[20rem] absolute right-32 bottom-4">
      <div>Let Us know about he issue you are facing right now!
        <span>
        <hr className="h-0.5 bg-black" />
        </span>
      </div>
      <div>
        <div>
          <div>
            <p>Choose a Section</p>
          </div>
          <div>
            <select className="border-2 w-[100%] border-black" name="Questions">
              <option value={"Interview Questions"} defaultChecked={true}>
                Interview Questions
              </option>
              <option value={"Technical Questions"}>Technical Questions</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <p>Describe the issue in Detail</p>
          </div>
          <div>
            <textarea
              className="border-2 w-[100%] border-black"
              rows={7}
              cols={30}
              placeholder="write here..."
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-gray-400 w-28 text-white" type="submit">Submit</button>
      </div>
    </div>
  );
}
