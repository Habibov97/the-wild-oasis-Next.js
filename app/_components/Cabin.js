import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Cabin({cabin}) {

  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-6 md:gap-20 border border-primary-800 py-3 px-5 md:px-10 mb-24">
      {/* Image Block */}
      <div className="relative w-full h-[250px] md:h-auto md:scale-[1.15] md:-translate-x-3">
        <Image 
          src={image} 
          alt={`Cabin ${name}`} 
          layout="fill" 
          objectFit="cover" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Block */}
      <div>
        <h3 className="text-accent-100 font-black text-4xl md:text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-full md:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span>{" "}
              guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
