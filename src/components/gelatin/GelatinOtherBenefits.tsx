const otherBenefits = [
    "It is used in the plastic industry due to its protective colloid properties.",
    "It is used in the match box industry to make match heads.",
    "It is used in the photographic industry.",
    "It is used in ballistics tests.",
    "It helps to remove oil, fats, rust, and other contaminants from the surface.",
    "It is also used in the field of automobile safety research because of gelatin’s unique functional properties."
];

const GelatinOtherBenefits = () => {
    return (
        <section className="py-12 md:py-16 bg-athos-light">
            <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#1D7AA3] leading-[120%] mb-10">
                    Other benefits of Fish Gelatin
                </h2>

                <ul className="space-y-3">
                    {otherBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#555555]">
                            <span className="mt-1 text-[16px] text-[#66b036]">▲</span>
                            <span className="text-[16px] leading-[24px]">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default GelatinOtherBenefits;
