// import { Temperature } from "apps/weather/loaders/temperature.ts";

type Props = {
  celcius: string;
};

export default function Temperature ({ celcius }: Props) {
  return (
    <div class="container mb-2 bg-gradient-to-r  text-center from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <p class="block font-bold text-lg"></p>
      <br />
      {celcius}
    </div>
  );
}
