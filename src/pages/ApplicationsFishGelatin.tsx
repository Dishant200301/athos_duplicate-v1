import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const ApplicationsFishGelatin = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            <Helmet>
                <title>Applications Fish Gelatin - Athos Collagen Pvt. Ltd</title>
                <meta name="description" content="Discover applications of Athos Fish Gelatin in pharmaceutical and food industries. High purity, biocompatible marine gelatin for capsules, tablets, food products, and more." />
                <link rel="canonical" href="https://athoscollagen.com/applications/fish-gelatin" />
            </Helmet>
            <TopHeader />
            <Navbar />

            <main className="flex-1">
                {/* Pharmaceutical Industry Section - Light Blue Background */}
                <section className="py-12 px-0 md:py-16 md:px-4 bg-[#EDF5F8]">
                    <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
                        <h1 className="text-[28px] md:text-[32px] font-bold text-[#1D7AA3] mb-8">
                            Application of Athos Fish Gelatin in the Pharmaceutical Industry
                        </h1>

                        <div className="space-y-8">
                            {/* Capsules and Encapsulation */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Capsules and Encapsulation
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Soft gel capsules</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Hard gel capsules</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Microencapsulation of active ingredients</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tablets and Pills */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Tablets and Pills
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Acts as a gelling and binding agent</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Provides controlled release of drugs</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Drug Delivery Systems */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Drug Delivery Systems
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Used in hydrogel formulations</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Enables time-release or delivery systems</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Wound Care and Healing */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Wound Care and Healing
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Promotes the wound dressing</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Enhances wound healing process</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Biocompatible Materials */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Biocompatible Materials
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Scaffolds for tissue engineering</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Implantable medical devices</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Cryopreservation */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Cryopreservation
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Cryoprotectant for cells and tissues (stem cells)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Text for Pharmaceutical */}
                        <div className="mt-12">
                            <div className="bg-white rounded-[20px] px-8 py-6 shadow-sm">
                                <p className="text-[16px] md:text-[18px] text-[#1D7AA3] font-bold leading-[27px] text-center">
                                    Fish Gelatin is prized for its high purity, biocompatibility, and ability to form films and gels, making it an ideal choice for a variety of pharmaceutical applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Food Industry Section - White Background */}
                <section className="py-12 md:px-4 md:py-16 bg-white">
                    <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
                        <h1 className="text-[28px] md:text-[32px] font-bold text-[#1D7AA3] mb-8">
                            Application of Athos Fish Gelatin in the Food Industry
                        </h1>

                        <div className="space-y-8">
                            {/* Gelling Agent */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Gelling Agent
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Jelly desserts.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Marshmallows.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Gummy candies.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Film Forming */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Film Forming
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Edible films and coatings for food preservation.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Encapsulation of Vitamins, Colorants and nutrients.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Stabilizer */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Stabilizer
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Yogurts.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Creams.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Ice creams.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Emulsifier */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Emulsifier
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Emulsified products like dressings and spreads.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Thickener */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Thickner
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Sauces.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Soups.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Gravies.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Clarifying Agent */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Clarifying Agent
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Clarification of wines, beers and juices.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Texturizer and Dairy Products */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Texturizer and Dairy Products
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Meat products.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Bakery products.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Help in the production of low-fat spreads and dairy products like sour cream, yogurt, and cheese.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Replacement of Bovine and Porcine Gelatin */}
                            <div>
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#555555] mb-3">
                                    Replacement of Bovine and Porcine Gelatin
                                </h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Fish Gelatin can replace other gelatins because it contains all essential and non-essential amino acids.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#555555]">
                                        <span className="text-[#66b036] mt-1">▲</span>
                                        <span className="text-[16px] leading-[24px]">Reduces pollution and increases the utilization of fish waste.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Text for Food Industry */}
                        <div className="mt-12">
                            <div className="bg-white border border-[#dddddd] rounded-[20px] px-8 py-6 shadow-sm">
                                <p className="text-[16px] md:text-[18px] text-[#1D7AA3] font-bold leading-[27px] text-center">
                                    Fish Gelatin is highly favored for its ability to form strong reversible gels, its transparency, and its lack of taste and odor, making it a versatile ingredient in the food industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterCTA />
            <Footer />
        </div>
    );
};

export default ApplicationsFishGelatin;
