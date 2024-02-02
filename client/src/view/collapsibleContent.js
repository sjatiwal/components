import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import Title from "../component/title";

const CollapsibleContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tab = (data) => {
    setActiveTab(data);
  };

  const [activeTab1, setActiveTab1] = useState(1);
  const subTab = (data) => {
    setActiveTab1(data);
  };

  const [multiple1, setMultiple1] = useState(false);
  const [multiple2, setMultiple2] = useState(false);
  const [multiple3, setMultiple3] = useState(false);
  const [multiple4, setMultiple4] = useState(false);

  return (
    <>
      <Title title="Collapse" />
      <div className="p-4">
        <div className="text-2xl">Collapsible Content</div>
        <div className="mt-6">
          <div className="flex flex-col md:flex-row">
            <span
              className={`${
                activeTab === 1
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 `}
              onClick={() => tab(1)}
            >
              Single Collapse
            </span>
            <span
              className={`${
                activeTab === 2
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(2)}
            >
              Multiple Collapse
            </span>
          </div>
        </div>
        <div className="border-2 border-slate-300 px-2 py-4">
          {activeTab === 1 && (
            <>
              <div
                className="bg-blue-400 pl-2 py-2 flex items-center justify-between"
                onClick={() => subTab(1)}
              >
                <span>Know Your Goals and Priorities Wisely</span>
                <span className="pr-2">
                  {activeTab1 === 1 ? <HiMinus /> : <HiPlus />}
                </span>
              </div>
              {activeTab1 === 1 && (
                <div className="pl-4">
                  What are your priorities for the day? Make a list of your
                  priorities and plan your day. The tasks of the day must be
                  outlined with the most important and urgent ones on top.
                  Likewise, determine your short-term and long-term goals and
                  evaluate your progress frequently.
                </div>
              )}
              <div
                className="bg-blue-400 mt-2 pl-2 py-2 flex items-center justify-between"
                onClick={() => subTab(2)}
              >
                <span>Be Focused and Eleminate Distraction</span>
                <span className="pr-2">
                  {activeTab1 === 2 ? <HiMinus /> : <HiPlus />}
                </span>
              </div>
              {activeTab1 === 2 && (
                <div className="pl-4">
                  Are you really present physically and mentally. Try to block
                  out all distractions so that you have
                </div>
              )}
              <div
                className="bg-blue-400 mt-2 pl-2 py-2 flex items-center justify-between"
                onClick={() => subTab(3)}
              >
                <span> Choose The right mentor to Succeed in Career</span>
                <span className="pr-2">
                  {activeTab1 === 3 ? <HiMinus /> : <HiPlus />}
                </span>
              </div>
              {activeTab1 === 3 && (
                <div className="pl-4">
                  There is a big difference between a mentor and a coach
                  Mentoring is a long-term process based on mutual trust and
                  respect. Coaching, on the other hand, is for a short period of
                  time. The topmost priority of a mentor is to help develop
                  skills that are not just relevant for the mentees in their
                  present job, but also for the future. A mentor has the
                  first-hand experience in the industry
                </div>
              )}
            </>
          )}
          {activeTab === 2 && (
            <>
              <div
                onClick={() => setMultiple1(!multiple1)}
                className="bg-blue-400 pl-2 py-2 flex items-center justify-between"
              >
                <span> Collaborate With Colleagues</span>
                <span className="pr-2">
                  {multiple1 ? <HiMinus /> : <HiPlus />}
                </span>
              </div>
              {multiple1 && (
                <div className="border-2 border-slate-300 pl-2">
                  Teach and learn from each other <br /> Collaborate on lesson
                  plans-Two
                  <br />
                  minds are better than one. <br /> Build your own social
                  network
                  <br />
                  Get feedback regularly <br /> Work together to solve problems
                  <br /> Become a teacher-leader <br /> Adopt a team mentality
                  <br />
                  Ask for help <br /> Find a mentor <br />
                  Be open to new ideas
                </div>
              )}
              <div
                onClick={() => setMultiple2(!multiple2)}
                className="bg-blue-400 pl-2 mt-2 py-2 flex items-center justify-between"
              >
                <span> Learn Anything Quickly</span>
                <span className="pr-2">
                  {multiple2 ? <HiMinus /> : <HiPlus />}
                </span>
              </div>
              {multiple2 && (
                <div className="border-2 border-slate-300 pl-2">
                  Learn by doing. Always play with the code while learning1.
                  <br />
                  Ask for help. You’ll need it
                  <br />
                  TEACH SOMEONE ELSE
                  <br />
                  FOCUS ON THE 20%
                  <br />
                  Identifying the problem that needs solving
                  <br />
                  Seek out more online resources. There’s a wealth of content
                  <br />
                  Don’t just read the sample code. Tinker with it!
                  <br />
                  Take breaks when debugging
                  <br />
                  Keep Calm and Keep On Coding
                </div>
              )}

              <div
                onClick={() => setMultiple3(!multiple3)}
                className="bg-blue-400 pl-2 mt-2 py-2 flex items-center justify-between"
              >
                <span>Reason People Give Up on Their Goals Too Early</span>
                <span className="pr-2">
                  {multiple3 ? <HiMinus /> : <HiPlus />}
                </span>
              </div>
              {multiple3 && (
                <div className="border-2 border-slate-300 pl-2">
                  They want the outcome more than they want to obtain a skill
                  <br />
                  They do not have the discipline to stick with their idea long
                  enough to see it live
                  <br />
                  They get distracted by what someone else is doing
                  <br />
                  They don't believe in themselves enough.
                  <br />
                  They fail once--and never try again
                  <br />
                  They don't learn how to discipline themselves
                  <br />
                  They care more about the end result, not the process
                  <br />
                  They surround themselves with people who are a negative
                  influence.
                  <br />
                  They would rather settle for short-term rewards
                  <br />
                  They don't have a guaranteed path to achieve success
                  <br />
                  They don’t have the discipline to work hard enough
                  <br />
                  They become distracted by other aspects of their life
                  <br />
                  They don't know that failure is normal
                </div>
              )}
              <div
                onClick={() => setMultiple4(!multiple4)}
                className="bg-blue-400 pl-2 mt-2 py-2 flex items-center justify-between"
              >
                <span> Sign for Settling For Less In Life</span>
                <span className="pr-2">
                  {multiple4 ? <HiMinus /> : <HiPlus />}
                </span>
              </div>
              {multiple4 && (
                <div className="border-2 border-slate-300 pl-2">
                  You are always tired
                  <br />
                  You keep saying "after"
                  <br />
                  You don’t think you can
                  <br />
                  You think a lot, but do little
                  <br />
                  You are playing small and you think it’s OK
                  <br />
                  WhatsApp, Facebook, and TV are the highlight of your day
                  <br />
                  You are not ready to break comfort
                  <br />
                  You rely on escapism
                  <br />
                  You have the exact same friends
                  <br />
                  You have no idea what you want
                  <br />
                  You don't think you deserve better
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CollapsibleContent;
