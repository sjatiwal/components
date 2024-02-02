import React, { useState } from "react";
import Title from "../component/title";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tab = (data) => {
    setActiveTab(data);
  };

  return (
    <>
      <Title title="Multiple Tabs" />
      <div className="p-4">
        <div className="text-2xl"> Tabs</div>
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
              Plan To Succeed
            </span>
            <span
              className={`${
                activeTab === 2
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:ml-2 md:mt-0`}
              onClick={() => tab(2)}
            >
              UnLearning
            </span>
            <span
              className={`${
                activeTab === 3
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:ml-2 md:mt-0`}
              onClick={() => tab(3)}
            >
              Ways To UnLearning
            </span>
          </div>
          <div className="p-4 pb-4 border-2 border-slate-200">
            {activeTab === 1 && (
              <div>
                <div>
                  <div>
                    Congratulations, You are in the best place to learn the
                    technologies for JOB. Please strictly follow the plan for
                    the first 45 days to see the unbelievable results.
                  </div>
                  <br />
                  <div>
                    You must UNLEARN to LEARN new things every day as
                    technologies are changing faster than ever and Because the
                    old rules will no longer apply...and so your old knowledge
                    is. It's time for us to think beyond.
                  </div>
                  <br />
                  <div>
                    It's not just learning technologies, Also You learn how to
                    use your knowledge and experience to get a job in less than
                    100 days.
                  </div>
                </div>
                <div className="mt-4">
                  <input className="border-2 border-slate-400 ml-[10%]" />
                  <input className="border-2 border-slate-400 ml-[10%] mt-2 md:mt-0" />
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <div>
                  <div>
                    Unlearning is the process of realizing that something which
                    we learned earlier is incorrect, ineffective, or obsolete,
                    admitting it and deciding to erase such bad conditioning and
                    misconceptions from our mind for good. It is the process of
                    exploring what we have stored in our system and deleting all
                    the unnecessary data. It is the process of saying bye to an
                    old, obsolete, and outdated paradigm and embracing a new
                    paradigm and willingly undergoing a paradigm shift.
                  </div>
                  <br />
                  <div>
                    Unfortunately, we are controlled by myths which do not allow
                    us to open our eyes to reality
                  </div>
                </div>
                <div className="mt-4">
                  <input className="border-2 border-slate-400 ml-[10%]" />
                  <input className="border-2 border-slate-400 ml-[10%]  mt-2 md:mt-0" />
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <div>
                  <div>
                    The first step towards becoming an “unlearned” is not just
                    to have a thirst for knowledge but to question our
                    knowledge. Discussing our knowledge with those who are
                    competent in a particular field, being challenged
                    constantly, and being ready to be proved wrong will help us
                    understand whether what we have learned is still relevant or
                    obsolete. It is also important to question one’s belief
                    system and check whether we are treating myths as scientific
                    facts.
                  </div>
                  <br />
                  <div>
                    The next important step is to take steps to develop creative
                    and critical thinking.
                  </div>
                </div>
                <div className="mt-4">
                  <input className="border-2 border-slate-400 ml-[10%]" />
                  <input className="border-2 border-slate-400 ml-[10%] mt-2 md:mt-0" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
