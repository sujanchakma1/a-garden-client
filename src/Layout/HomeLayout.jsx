import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Extra2 from "../Components/Extra2";
import Extra1 from "../Components/Extra1";
import TrendingTips from "../Components/TrendingTips";
import { Suspense } from "react";
import Loading from "../Components/Loading";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
  return (
    <div>
      <Helmet>
        <title>A Garden || Home</title>
      </Helmet>
      {/* banner section */}
      <section>
        <Banner></Banner>
      </section>
      {/* Featured Gardeners section */}
      <section>
        <Suspense fallback={<Loading></Loading>}>
          <Featured></Featured>
        </Suspense>
      </section>
      {/* Top Trending Tips section */}
      <section>
        <Suspense fallback={<Loading></Loading>}>
          <TrendingTips></TrendingTips>
        </Suspense>
      </section>
      {/* extra section */}
      <section>
        <Extra1></Extra1>
      </section>
      <section>
        <Extra2></Extra2>
      </section>
    </div>
  );
};

export default HomeLayout;
