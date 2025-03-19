import VideoMobile from "../../assets/videos/Home_VideoMobile.mp4";
import VideoPC from "../../assets/videos/Home_VideoPC.mp4";
import HondaRoadSync from "../../assets/images/home_hondaroadsync.png";
import HondaRoadSyncRight from "../../assets/images/home_hondaroadsync_left.png";
import HomeAvenger from "../../assets/images/home_avenger.jpg";
import { Icon } from "@iconify/react";
import NewsCard from "../../components/Home/NewsCard";
import IdeaItem from "../../components/Home/IdeaItem";
import BlogCard from "../../components/Home/BlogCard";

const Home = () => {
  const data = [
    {
      img: "https://global.honda/en/motorcycle/news/shared/img/thumb_2_2024-10-11.webp",
      title: "Overview of RTL ELECTRIC Competition Trial Bike",
      path: "",
      tag: "New",
    },
    {
      img: "https://global.honda/en/motorcycle/news/shared/img/thumb_2241009.webp",
      title: "Honda Announces CUV e: and ICON e: in Indonesia",
      path: "",
      tag: "New",
    },
    {
      img: "https://global.honda/en/motorcycle/news/shared/img/thumb_common.jpg",
      title:
        "Honda Opens New R&D Facility in Bengaluru to Accelerate Electrification in India",
      path: "",
      tag: "New",
    },
    // {
    //   img: "https://global.honda/en/motorcycle/news/shared/img/thumb_ce_2024-04-10.jpg",
    //   title: "Four Honda Products Named Winners in the Red Dot Design Award",
    //   path: "",
    // },
    // {
    //   img: "https://global.honda/en/motorcycle/news/shared/img/thumb_231129b.jpg",
    //   title: "2023 Honda Briefing on Motorcycle Electrification Business",
    //   path: "",
    // },
    // {
    //   img: "https://global.honda/en/motorcycle/top/kv/kv2.jpg",
    //   title: "Overview of Honda Exhibits at the JAPAN MOBILITY SHOW 2023",
    //   path: "",
    // },
  ];
  const ideas = [
    {
      title: "Net zero CO2 emissions by 2050",
      describe:
        "To address climate change issues, Honda will work toward a target of limiting the global average temperature rise to 1.5ºC above pre-industrial levels by reducing carbon emissions from corporate activities and throughout the product life cycle.",
    },
    {
      title: "100% utilization of carbon-free energy by 2050",
      describe:
        "To address energy issues, Honda will go a step beyond its conventional initiative of reducing energy risks and aim to use clean energy both during product use and in corporate activities.",
    },
    {
      title: "100% use of sustainable materials by 2050",
      describe:
        "To address the effective utilization of resources, Honda will go beyond its previous initiative aimed at reducing the risks related to resources and waste disposal by taking on the additional challenge of developing products and creating systems that use sustainable materials and have zero environmental impact. In the area of corporate activities, Honda aims to achieve “zero” industrial water intake and industrial waste at Honda plants by 2050.",
    },
  ];

  const blogs = [
    {
      image:
        "https://global.honda/en/motorcycle/news/shared/img/thumb_221025.jpg",
      title:
        "Honda Begins Sales of “Honda Power Pack Exchanger e:” Battery Swapping Station",
      tag: "New",
    },
    {
      image:
        "https://global.honda/en/motorcycle/news/shared/img/thumb_common.jpg",
      title:
        "Honda Signs a Letter of Intent with KTM, Piaggio and Yamaha Motor for the Creation of a Swappable Batteries Consortium for Motorcycles and Light Electric Vehicles",
      tag: "New",
    },
  ];
  return (
    <div className="flex flex-col gap-4 h-fit items-center justify-center">
      <div className="min-h-fit relative block">
        <video
          className="w-full lg:h-[calc(100vh-10px)] object-cover border-none"
          autoPlay
          muted
          loop
        >
          <source
            src={window.innerWidth >= 1280 ? VideoPC : VideoMobile}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 z-1 flex items-center justify-center bg-gradient-to-t from-black/80 via-50% via-black/20 to-black/10"></div>

        {/* <div className="absolute bottom-10 left-0 right-0 h-fit z-2 flex items-center justify-center">
          <div className="uppercase flex items-center justify-center text-4xl text-white font-semibold">
            HONDA EXCLUSIVE AUTHORISED DEALER
          </div>
        </div> */}
      </div>
      <div className="min-h-fit relative block">
        <video
          className="w-full h-full object-cover border-none"
          autoPlay
          muted
          loop
        >
          <source
            src="https://global.honda/en/motorcycle/top/movie//CR-Electric/CR-ElectricL.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 z-1 flex items-center justify-center bg-gradient-to-t from-black/80 via-50% via-black/20 to-black/10"></div>

        <div className="absolute bottom-2 md:bottom-10 left-0 right-0 h-fit z-2 flex items-center justify-center group">
          <div className="flex w-fit h-full items-center justify-center cursor-pointer">
            <div className="uppercase text-sm md:text-xl text-white font-semibold">
              Learn More
            </div>
            <Icon
              className="text-white w-8 h-8 group-hover:translate-x-2 duration-200"
              icon="mingcute:right-fill"
            />
          </div>
        </div>

        {/* <img src="https://global.honda/en/motorcycle/top/kv/kv2.jpg"/> */}
      </div>
      <div className="p-6 md:p-8 lg:p-14 2xl:p-20 md:px-0 lg:px-0 2xl:px-0 2xl:pt-18 flex flex-col gap-12 w-auto h-auto xl:my-4 max-w-[1440px]">
        <h1 className="flex h-fit items-center justify-start text-5xl font-bold tracking-wider text-primary">
          Latest News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {data.map((item, index) => {
            return <NewsCard item={item} key={item} />;
          })}
        </div>
      </div>
      <div className="h-fit relative flex flex-col items-center justify-end max-w-[1440px] gap-8">
        <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center home_layer_bottomleft_topright opacity-[0.8]"></div>
        <div className="z-[1] xl:w-[60%] flex flex-col p-6 xl:p-10  gap-4 pb-0 pt-12 xl:pt-20">
          <div className="text-xl xl:text-3xl text-center font-bold tracking-wide text-primary">Honda RoadSync Dou</div>
          <div className="text-sm lg:text-md xl:text-xl text-center tracking-wider text-primary">The world's most advanced battery swapping system, vehicles recharged in seconds.</div>
          <div className="text-sm text-[#0680F4] font-semibold tracking-wider text-center uppercase">Discover More</div>
        </div>
        <img src={HondaRoadSync} className="z-[1] w-[40%]" />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-6 max-w-[1440px]">
        <div className="relative flex flex-col items-center justify-between gap-8 xl:aspect-square">         
          <div className="z-[1] flex flex-col px-6 md:px-6 xl:px-10 gap-4 h-fit absolute top-[10%]">
            <div className="sm:text-2xl xl:text-3xl text-center font-bold tracking-wide text-primary">Fleet Management & Sharing</div>
            <div className="text-[10px] sm:text-sm lg:text-md xl:text-xl text-center tracking-wider text-primary">The world's most advanced battery swapping system, vehicles recharged in seconds.</div>
            <div className="text-[8px] sm:text-sm text-[#0680F4] font-semibold tracking-wider text-center uppercase">Discover More</div>
          </div>
          <img src="https://cdn.gogoro.com/resources/pages/global-home/banners/202212/img-home-global-goshare-mobile@2x.jpg?v=7" className="aspect-[1.1] object-cover" />
        </div>
        <div className="relative flex flex-col items-center justify-between gap-8 xl:aspect-square">         
          <div className="z-[1] flex flex-col px-6 md:px-6 xl:px-10 gap-4 h-fit absolute top-[10%]">
            <div className="sm:text-2xl xl:text-3xl text-center font-bold tracking-wide text-primary">Smartscooter</div>
            <div className="text-[10px] sm:text-sm lg:text-md xl:text-xl text-center tracking-wider text-primary">Smart, connected vehicles designed to decarbonize businesses and inspire consumers.</div>
            <div className="text-[8px] sm:text-sm text-[#0680F4] font-semibold tracking-wider text-center uppercase">Discover More</div>
          </div>
          <img src="https://cdn.gogoro.com/resources/pages/global-home/banners/202212/img-home-global-group-mobile@2x.jpg?v=7" className="aspect-[1.1] object-cover" />
        </div>
        {/* <div className="relative flex flex-col items-center justify-between gap-8 aspect-square">
          <div className="z-[1] w-[90%] flex flex-col px-10 gap-4 h-fit absolute top-[10%]">
            <div className="text-4xl text-center font-bold tracking-wide text-primary">
              Smartscooter
            </div>
            <div className="text-center text-lg tracking-wider text-primary">
              Smart, connected vehicles designed to decarbonize businesses and
              inspire consumers.
            </div>
            <div className="text-sm text-[#0680F4] font-semibold tracking-wider text-center uppercase">
              Discover More
            </div>
          </div>
          <img src="https://cdn.gogoro.com/resources/pages/global-home/banners/202212/img-home-global-group-mobile@2x.jpg?v=7" className="aspect-[1.1] object-cover" />
        </div> */}
      </div>

      <div className="w-full py-16">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <div className="text-center tracking-wider text-primary text-xl md:text-3xl lg:text-5xl font-semibold w-full max-w-[980px]">
            Technology solutions that&apos;s making urban sustainability
            possible.
          </div>

          <div className="flex w-full max-w-[350p] md:max-w-[400px] lg:max-w-[600px] text-primary">
            <div className="flex flex-col text-center justify-center items-center w-full max-w-[350p] md:max-w-[400px] lg:max-w-[600px] text-primary">
              <div className="relative text-2xl md:text-4xl lg:text-6xl font-bold">
                50 +
                {/* <Icon
                  className="absolute top-0 right-[19%] sm:right-[23%] xl:right-[20%] text-black w-6 h-6 "
                  icon="stash:plus-solid"
                /> */}
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-semibold">
                Cities
              </div>
            </div>

            <div className="flex flex-col text-center justify-center items-center w-full max-w-[350p] md:max-w-[400px] lg:max-w-[600px] text-primary">
              <div className="text-2xl md:text-4xl lg:text-6xl font-bold">
                One
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-semibold">
                Platform
              </div>
            </div>

            <div className="flex flex-col text-center justify-center items-center w-full max-w-[350p] md:max-w-[400px] lg:max-w-[600px] text-primary">
              <div className="relative text-2xl md:text-4xl lg:text-6xl font-bold">
                55 +
                {/* <Icon
                  className="absolute top-0 right-[20%] text-black w-6 h-6 "
                  icon="stash:plus-solid"
                /> */}
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-semibold">
                Vehicles
              </div>
            </div>
          </div>

          <div className="w-full">
            <img
              src={HomeAvenger}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[10vh] 2xl:min-h-[15vh] flex flex-col items-center justify-end text-center text-slate-600 text-xl lg:text-3xl xl:text-5xl 2xl:mb-12 ">
        Initiatives Toward Realizing a Zero Environmental Impact Society
      </div>
      <div className="w-full flex justify-center items-center flex-col sm:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 max-w-[960px] py-4">
          {ideas.map((item, index) => {
            return <IdeaItem idea={item} index={index} key={item} />;
          })}
        </div>
      </div>

      <div className="w-full max-w-[1440px] flex gap-4 flex-col lg:flex-row mt-24">
        {blogs.map((item, index) => {
          return <BlogCard item={item} key={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
