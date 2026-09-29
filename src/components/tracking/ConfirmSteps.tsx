import React from "react";

function ConfirmSteps() {
  return (
    <section className="p-6 rounded-xl bg-[#FFDF9726] space-y-4 mt-4 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold text-xl text-primary">الخطوات التالية </h2>
          <p className="text-4xl font-bold ">إيه اللي هيحصل دلوقتي؟</p>
          <p className="text-xl text-gray-400">
            منسق مخصص من مكتب رحلات سيناء المحلي هيراجع طلبك ويتواصل معاك
            خلال{" "}
          </p>
          <p className="p-1 bg-[#D1E4FF80] px-4 w-fit text-secondary font-bold rounded-xl">
            الأماكن محجوزة لك بشكل مبدئي مؤقت
          </p>
        </div>
        <div className="flex-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          <article className="p-2 rounded-xl bg-white space-y-2">
            <div className="flex gap-4">
              <span className="font-bold w-fit h-fit bg-secondary rounded-xl text-white p-1">
                1
              </span>
              <div className="">
                <p className="font-bold text-xl">مراجعة الغرف والكامب</p>
                <p>
                  التحقق من توفر الأماكن وتخصيص غرف الكامب البدوي الأصلية في
                  دهب.
                </p>
              </div>
            </div>
          </article>
          <article className="p-2 rounded-xl bg-white space-y-2">
            <div className="flex gap-4">
              <span className="font-bold w-fit h-fit bg-secondary rounded-xl text-white p-1">
                2
              </span>
              <div className="">
                <p className="font-bold text-xl">مراجعة الغرف والكامب</p>
                <p>
                  التحقق من توفر الأماكن وتخصيص غرف الكامب البدوي الأصلية في
                  دهب.
                </p>
              </div>
            </div>
          </article>{" "}
          <article className="p-2 rounded-xl bg-white space-y-2">
            <div className="flex gap-4">
              <span className="font-bold w-fit h-fit bg-secondary rounded-xl text-white p-1">
                3
              </span>
              <div className="">
                <p className="font-bold text-xl">مراجعة الغرف والكامب</p>
                <p>
                  التحقق من توفر الأماكن وتخصيص غرف الكامب البدوي الأصلية في
                  دهب.
                </p>
              </div>
            </div>
          </article>{" "}
          <article className="p-2 rounded-xl bg-white space-y-2">
            <div className="flex gap-4">
              <span className="font-bold w-fit h-fit bg-secondary rounded-xl text-white p-1">
                4
              </span>
              <div className="">
                <p className="font-bold text-xl">مراجعة الغرف والكامب</p>
                <p>
                  التحقق من توفر الأماكن وتخصيص غرف الكامب البدوي الأصلية في
                  دهب.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ConfirmSteps;
