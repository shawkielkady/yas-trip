import Image from "next/image";
import dahab from "../assets/images/areas/dahab.png";

function TripCard() {
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-2xl  bg-white  shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <Image
          src={dahab}
          alt="٣ أسباب تخليك تسافر سينا"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center ">
            <p className="text-primary  text-xs md:text-sm lg:text-lg font-semibold">
              {" "}
              دهب{" "}
            </p>
            <p className="text-text-muted text-xs "> بواسطة kings Trip </p>
          </div>
          <p className="font-bold text-xl  text-secondary">
            الفيوم - تزلج الرمال وتأمل النجوم في وادي الحيتان{" "}
          </p>
        </div>

        <div className="pt-4 mt-2  flex items-center justify-between text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
          <span className="text-primary font-semibold">
            {" "}
            ابتداء من 1000 جنيه
          </span>
          <button className="  py-2 px-4 rounded-full text-white bg-primary hover:bg-primary/80 transition-colors duration-300">
            احجز الان
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
