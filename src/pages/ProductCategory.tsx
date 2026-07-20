import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

interface SubProduct {
  name: string;
  slug: string;
  description?: string;
  bullets: string[];
}

interface CategoryData {
  title: string;
  description: string;
  subProducts: SubProduct[];
}

const productCategoryData: Record<string, CategoryData> = {
  enzymes: {
    title: "Enzymes",
    description:
      "At Athos Collagen Pvt. Ltd., we recognize the growing importance of enzymes in transforming pharmaceutical manufacturing and therapeutic development. As highly efficient biological catalysts, pharmaceutical enzymes enable precise biochemical reactions that improve product quality, enhance manufacturing efficiency, and support the development of advanced healthcare solutions. Enzymes play a critical role in the synthesis of pharmaceutical ingredients by facilitating selective and controlled reactions. Their exceptional specificity minimizes unwanted by-products, resulting in higher-purity compounds and consistent product quality. Compared to conventional chemical methods, enzyme-based processes operate under milder conditions, reducing energy consumption and supporting environmentally responsible manufacturing.\n\nAt Athos Collagen Pvt. Ltd., we are committed to delivering high-quality enzyme solutions that meet the evolving requirements of the pharmaceutical industry. Our focus on innovation, quality assurance, and scientific excellence enables us to support manufacturers in developing safe, effective, and reliable pharmaceutical products. As the pharmaceutical industry continues to embrace biotechnology and sustainable manufacturing, enzymes remain at the forefront of innovation. Athos Collagen Pvt. Ltd. is dedicated to providing dependable enzyme solutions that help shape the future of modern healthcare while contributing to improved patient outcomes worldwide.",
    subProducts: [
      {
        name: "Serratiopeptidase",
        slug: "serratiopeptidase",
        bullets: [
          "Proteolytic enzyme ingredient developed for pharmaceutical and nutraceutical applications.",
          "Exhibits selective enzymatic activity for specialized formulation development.",
          "Derived through controlled microbial fermentation processes to ensure reliable product characteristics.",
          "Available in customized strengths and specifications for diverse formulation needs.",
          "Incorporated into tablets, capsules, and other enzyme-based dosage forms.",
          "Compatible with complementary enzymes, botanical extracts, vitamins, and functional ingredients.",
          "Designed for use in innovative healthcare and wellness product development.",
          "Offers excellent stability characteristics when formulated under appropriate conditions.",
          "Utilized by manufacturers developing enzyme-focused nutritional and pharmaceutical solutions.",
          "Provides a valuable option for creating specialized formulations based on targeted enzymatic functionality."
        ]
      },
      {
        name: "Trypsin",
        slug: "trypsin",
        bullets: [
          "Facilitates protein breakdown through enzymatic hydrolysis",
          "Aids efficient digestion of protein-based compounds",
          "Promotes controlled tissue processing applications",
          "Contributes to wound care and recovery formulations",
          "Supports removal of non-viable protein materials",
          "Assists in protein modification and analysis processes",
          "Provides reliable performance in enzyme-based therapies",
          "Offers versatile applications across healthcare and biotechnology sectors"
        ]
      },
      {
        name: "Pancreatin",
        slug: "pancreatin",
        bullets: [
          "Multi-enzyme preparation containing protease, lipase, and amylase activities for nutritional and pharmaceutical applications.",
          "Developed for formulations requiring complementary digestive enzyme functionality.",
          "Manufactured with controlled processing methods to maintain enzymatic characteristics and product consistency.",
          "Available in different enzyme activity levels to meet specific formulation requirements.",
          "Incorporated into tablets, capsules, and specialized enzyme-based preparations.",
          "Compatible with nutritional blends, functional ingredients, and targeted enzyme formulations.",
          "Designed for use in pharmaceutical, nutraceutical, and healthcare product development.",
          "Offers reliable enzymatic performance across a variety of formulation platforms.",
          "Selected by manufacturers creating advanced digestive support and enzyme-based products.",
          "Provides a functional enzyme solution for applications requiring combined digestive activity."
        ]
      },
      {
        name: "Pepsin",
        slug: "pepsin",
        bullets: [
          "Proteolytic enzyme ingredient designed for pharmaceutical, nutraceutical, and research applications.",
          "Derived from controlled enzymatic processing to deliver dependable functional characteristics.",
          "Exhibits strong protease activity suitable for specialized formulation requirements.",
          "Available in customized potency levels to match diverse application needs.",
          "Incorporated into enzyme-based formulations, nutritional products, and specialty preparations.",
          "Compatible with protein-based systems, functional blends, and complementary enzyme combinations.",
          "Maintains functional activity across formulations designed for acidic environments.",
          "Utilized by manufacturers developing targeted enzyme solutions for healthcare and biotechnology sectors.",
          "Provides consistent enzymatic characteristics for product development and analytical applications.",
          "A valuable enzyme component for formulations requiring specific protein-processing functionality."
        ]
      },
      {
        name: "Amylase",
        slug: "amylase",
        bullets: [
          "Carbohydrate-degrading enzyme developed for nutritional, pharmaceutical, and industrial applications.",
          "Catalyzes the conversion of starch molecules through specialized enzymatic action.",
          "Available in different activity grades to meet varied formulation and processing needs.",
          "Incorporated into enzyme-based preparations, functional nutrition products, and technical applications.",
          "Demonstrates effective functionality across starch-processing systems and formulation platforms.",
          "Compatible with complementary enzymes, nutritional blends, and specialty ingredient combinations.",
          "Manufactured through controlled production methods to preserve enzymatic characteristics.",
          "Utilized by formulators developing solutions for food, healthcare, and biotechnology sectors.",
          "Delivers dependable catalytic activity for applications requiring carbohydrate transformation.",
          "Provides a valuable enzymatic component for modern product development and processing requirements."
        ]
      },
      {
        name: "Rennet",
        slug: "rennet",
        bullets: [
          "Milk-coagulating enzyme preparation designed for dairy and food processing applications.",
          "Enables controlled enzymatic transformation of casein during cheese production.",
          "Available in different activity strengths to match specific manufacturing requirements.",
          "Delivers functional performance in cheese, dairy cultures, and specialty food formulations.",
          "Helps achieve desired curd formation characteristics during dairy processing.",
          "Compatible with various milk systems and cheese-making methodologies.",
          "Manufactured through controlled processes to maintain enzymatic functionality.",
          "Used by dairy manufacturers developing products with specific texture and structural properties.",
          "Provides consistent enzyme activity for commercial food production environments.",
          "A key processing ingredient for modern dairy formulation and biotechnology applications."
        ]
      },
      {
        name: "Lactase",
        slug: "lactase",
        bullets: [
          "Dairy-focused enzyme preparation designed for food, nutraceutical, and nutritional applications.",
          "Converts lactose into simpler sugar components through targeted enzymatic action.",
          "Available in different activity levels to match diverse formulation requirements.",
          "Incorporated into dairy beverages, nutritional powders, supplements, and specialty food products.",
          "Provides effective functionality for lactose management in dairy-based formulations.",
          "Compatible with milk-derived ingredients, protein blends, and functional nutrition systems.",
          "Maintains enzymatic characteristics across carefully designed processing conditions.",
          "Used by manufacturers developing improved dairy product experiences and formulation solutions.",
          "Delivers dependable enzyme activity for commercial food and nutrition applications.",
          "An important component for developing lactose-focused dietary and dairy innovation products."
        ]
      },
      {
        name: "Lipase",
        slug: "lipase",
        bullets: [
          "Enzyme ingredient specialized for lipid transformation and nutritional formulation applications.",
          "Catalyzes the hydrolysis of fats into smaller components through enzymatic activity.",
          "Available in different potency levels to align with specific product development needs.",
          "Incorporated into digestive enzyme blends, dietary supplements, and functional nutrition products.",
          "Demonstrates compatibility with oil-based ingredients and complex nutritional formulations.",
          "Applied in food technology, biotechnology, and pharmaceutical development processes.",
          "Maintains functional enzyme characteristics across selected formulation conditions.",
          "Used by manufacturers creating targeted enzyme-based nutritional solutions.",
          "Provides dependable activity for applications requiring controlled lipid modification.",
          "Serves as a valuable enzymatic component in modern health and nutrition formulations."
        ]
      },
      {
        name: "Papain",
        slug: "papain",
        bullets: [
          "Plant-derived proteolytic enzyme obtained from papaya sources for specialized applications.",
          "Breaks down complex protein structures through targeted enzymatic activity.",
          "Available in different activity grades to meet diverse formulation requirements.",
          "Incorporated into nutraceutical, pharmaceutical, food, and biotechnology preparations.",
          "Demonstrates strong compatibility with protein-based ingredients and enzyme blends.",
          "Used in the development of digestive formulations and functional nutrition products.",
          "Maintains enzymatic functionality across carefully designed processing conditions.",
          "Applied in protein modification, food processing, and specialty enzyme applications.",
          "Delivers dependable protease characteristics for commercial formulation needs.",
          "Provides a functional enzyme solution for products requiring controlled protein hydrolysis."
        ]
      },
      {
        name: "Phospholipase",
        slug: "phospholipase",
        bullets: [
          "Enzyme ingredient involved in the transformation of phospholipid-based compounds.",
          "Designed for pharmaceutical, nutraceutical, food, and biotechnology applications.",
          "Available in different activity specifications to match specialized formulation needs.",
          "Catalyzes selective modification of phospholipid structures through enzymatic action.",
          "Incorporated into advanced enzyme blends and functional ingredient systems.",
          "Compatible with lipid-based formulations and complex biochemical processes.",
          "Used in research-driven applications requiring controlled phospholipid conversion.",
          "Maintains functional characteristics across carefully designed processing environments.",
          "Provides targeted enzymatic functionality for specialty product development.",
          "Serves as a valuable tool for manufacturers working on lipid-focused innovations."
        ]
      },
      {
        name: "Protease",
        slug: "protease",
        bullets: [
          "Protein-hydrolyzing enzyme designed for nutritional, pharmaceutical, food, and industrial applications.",
          "Catalyzes the cleavage of peptide bonds within complex protein structures.",
          "Available in multiple activity grades for specific formulation and processing requirements.",
          "Incorporated into enzyme blends, protein processing systems, and specialty preparations.",
          "Compatible with protein-based ingredients, amino acid blends, and functional formulations.",
          "Applied in biotechnology processes requiring controlled enzymatic hydrolysis.",
          "Provides effective functionality for protein modification and ingredient processing.",
          "Maintains enzymatic characteristics under selected application conditions.",
          "Used by formulators developing specialized enzyme-based products across multiple sectors.",
          "Delivers targeted proteolytic activity for modern nutritional and industrial applications."
        ]
      },
      {
        name: "Dextranase",
        slug: "dextranase",
        bullets: [
          "Polysaccharide-degrading enzyme developed for specialized food, pharmaceutical, and biotechnology applications.",
          "Available in customized activity levels to meet specific processing requirements.",
          "Incorporated into enzyme-based systems requiring controlled carbohydrate polymer modification.",
          "Demonstrates effective functionality in applications involving complex sugar polymers.",
          "Compatible with microbial polysaccharide research and industrial processing environments.",
          "Maintains enzymatic characteristics across selected formulation conditions.",
          "Used by manufacturers developing specialty solutions for carbohydrate-related applications.",
          "Provides controlled enzymatic activity for polymer transformation processes.",
          "Serves as a functional enzyme component in advanced biochemical applications."
        ]
      },
      {
        name: "Cellulase",
        slug: "cellulase",
        bullets: [
          "Available in different potency levels for varied formulation and processing needs.",
          "Incorporated into enzyme blends, plant-based ingredient systems, and specialty preparations.",
          "Compatible with botanical materials, fiber-rich substrates, and functional ingredient combinations.",
          "Applied in extraction processes, fermentation systems, and industrial biotechnology.",
          "Provides targeted enzymatic action for cellulose modification and processing applications.",
          "Maintains functional activity across carefully selected operating conditions.",
          "Used in the development of nutritional, agricultural, and industrial enzyme solutions.",
          "Delivers specific cellulolytic functionality for applications requiring fiber transformation."
        ]
      },
      {
        name: "Beta-Glucanase",
        slug: "beta-glucanase",
        bullets: [
          "Hydrolytic enzyme developed for the conversion of beta-glucan polysaccharides.",
          "Cleaves β-glucan chains through targeted enzymatic action.",
          "Recommended for cereal, grain, and fiber-based processing systems.",
          "Reduces viscosity associated with beta-glucan-rich raw materials.",
          "Functions efficiently within food manufacturing and fermentation operations.",
          "Integrates into multi-enzyme formulations designed for carbohydrate transformation.",
          "Applicable to biotechnology, feed, brewing, and nutritional ingredient production.",
          "Engineered to meet diverse industrial processing requirements.",
          "Delivers controlled polysaccharide modification for specialized manufacturing processes.",
          "Recognized as an essential component in enzyme-based processing technologies"
        ]
      },
      {
        name: "Transglutaminase",
        slug: "transglutaminase",
        bullets: [
          "Protein-modifying enzyme designed for specialized food and biotechnology applications.",
          "Forms covalent cross-links between protein molecules through enzymatic reactions.",
          "Delivers structural modification across diverse protein systems.",
          "Selected for manufacturing processes requiring controlled protein network formation.",
          "Performs effectively within dairy, meat, seafood, bakery, and plant-protein applications.",
          "Integrates into formulation strategies focused on protein functionality.",
          "Accommodates customized production parameters across multiple processing environments.",
          "Demonstrates consistent activity during industrial protein treatment operations.",
          "Recognized by formulators for creating products with refined structural characteristics.",
          "Serves as a key processing aid for protein engineering and food innovation."
        ]
      },
      {
        name: "Laccase",
        slug: "laccase",
        bullets: [
          "Oxidative enzyme utilized for specialized biochemical and industrial processes.",
          "Initiates electron transfer reactions across a broad range of phenolic substrates.",
          "Finds application in food processing, textile treatment, environmental technologies, and biotechnology.",
          "Demonstrates broad substrate selectivity under controlled operating conditions.",
          "Fits seamlessly into enzyme-based oxidation systems and process development.",
          "Delivers targeted catalytic activity for complex organic molecule transformation.",
          "Suitable for research laboratories and commercial manufacturing environments.",
          "Selected for production workflows requiring controlled oxidative modification.",
          "Adapts to diverse formulation and processing objectives.",
          "Represents a valuable biocatalyst for modern industrial innovation."
        ]
      },
      {
        name: "Polygalacturonase",
        slug: "polygalacturonase",
        bullets: [
          "Pectin-degrading enzyme developed for plant material processing and extraction technologies.",
          "Acts specifically on polygalacturonic acid within plant cell wall structures.",
          "Finds application in fruit processing, juice production, fermentation, and biotechnology.",
          "Simplifies the conversion of pectin-rich raw materials during manufacturing.",
          "Integrates into enzyme blends designed for botanical processing systems.",
          "Delivers controlled hydrolysis for specialized production requirements.",
          "Recognized across food technology and plant-based ingredient manufacturing.",
          "Accommodates customized process parameters for industrial operations.",
          "Selected for workflows involving plant-derived biomass transformation.",
          "Represents an effective solution for pectin modification and extraction processes."
        ]
      },
      {
        name: "Xylanase",
        slug: "xylanase",
        bullets: [
          "Hemicellulose-degrading enzyme intended for fiber conversion and biomass processing.",
          "Targets xylan polymers through selective catalytic action.",
          "Plays an important role in cereal processing, baking, feed production, and pulp industries.",
          "Encourages efficient utilization of hemicellulose-rich raw materials.",
          "Integrates with multi-enzyme systems for complex carbohydrate conversion.",
          "Performs efficiently across diverse manufacturing environments.",
          "Meets formulation requirements for biotechnology and industrial processing.",
          "Recognized for its role in plant fiber transformation technologies.",
          "Chosen by formulators developing enzyme-driven production solutions.",
          "Delivers controlled xylan hydrolysis for specialized processing applications."
        ]
      },
      {
        name: "Galactosidase",
        slug: "galactosidase",
        bullets: [
          "Carbohydrate-modifying enzyme developed for food, biotechnology, and nutritional applications.",
          "Catalyzes the hydrolysis of galactosidic linkages through selective enzymatic action.",
          "Suitable for dairy processing, functional ingredients, and specialty carbohydrate systems.",
          "Demonstrates effective performance in lactose and galacto-oligosaccharide-related processes.",
          "Integrates efficiently with multi-enzyme formulations for carbohydrate conversion.",
          "Functions across diverse manufacturing and research environments.",
          "Offered in customized activity grades to meet application-specific requirements.",
          "Selected for formulations involving carbohydrate transformation technologies.",
          "Delivers precise enzymatic activity for specialized processing operations.",
          "Represents an important component in enzyme-driven production systems."
        ]
      },
      {
        name: "Pectinase",
        slug: "pectinase",
        bullets: [
          "Plant cell wall-degrading enzyme intended for fruit, vegetable, and botanical processing.",
          "Targets pectin molecules through controlled enzymatic hydrolysis.",
          "Applied in juice production, wine making, extraction processes, and food technology.",
          "Simplifies handling of pectin-rich raw materials during manufacturing.",
          "Demonstrates efficient functionality within plant-based processing systems.",
          "Integrates into enzyme blends designed for botanical ingredient production.",
          "Accommodates customized process conditions across multiple industries.",
          "Chosen for production workflows involving plant biomass conversion.",
          "Delivers targeted pectin modification for specialized industrial operations.",
          "Represents a key biocatalyst in modern extraction and processing technologies"
        ]
      }
    ]
  },
  peptones: {
    title: "Peptones",
    description:
      "Peptones are complex mixtures of peptides, amino acids, and nitrogenous compounds obtained through controlled enzymatic or chemical hydrolysis of proteins. They serve as valuable nutritional components in microbiological culture media, pharmaceutical manufacturing, biotechnology research, and industrial fermentation processes. At Athos Collagen Pvt. Ltd., we provide high-quality peptones developed to meet the demanding requirements of pharmaceutical, biotechnology, and research applications. Our peptones offer excellent nutritional value, consistent composition, and reliable performance for supporting microbial growth and biological production processes.",
    subProducts: [
      {
        name: "Bovine Collagen Peptide",
        slug: "bovine-collagen-peptide",
        bullets: [
          "Provides a rich source of bioactive collagen-derived peptides",
          "Contributes to maintaining healthy skin structure and elasticity",
          "Aids in supporting connective tissue integrity",
          "Promotes collagen synthesis within the body",
          "Helps maintain joint and cartilage health",
          "Enhances nutritional value in wellness formulations",
          "Supports development of beauty and healthcare products",
          "Offers high bioavailability for effective peptide utilization",
          "Enables versatile applications in nutraceutical formulations",
          "Provides functional benefits across health and nutrition industries"
        ]
      },
      {
        name: "Veg Collagen",
        slug: "veg-collagen",
        bullets: [
          "Plant-derived formulation developed for next-generation beauty and wellness products.",
          "Combines carefully selected botanical ingredients with functional nutritional components.",
          "Designed for vegan, vegetarian, and clean-label product portfolios.",
          "Integrates seamlessly into powders, capsules, tablets, gummies, and beverage mixes.",
          "Suitable for beauty nutrition, active lifestyle, and daily wellness formulations.",
          "Complements vitamins, minerals, amino acids, botanical extracts, and antioxidant blends.",
          "Available in customized compositions to meet diverse product development requirements.",
          "Adaptable to private formulations targeting modern plant-based nutrition trends.",
          "Meets the growing consumer demand for sustainable and animal-free nutritional solutions.",
          "Represents a contemporary ingredient platform for innovative wellness product development."
        ]
      },
      {
        name: "Fish Collagen Peptide",
        slug: "fish-collagen-peptide",
        bullets: [
          "Marine-derived collagen protein obtained through controlled enzymatic hydrolysis.",
          "Characterized by a high protein content and a low molecular weight peptide profile.",
          "Dissolves rapidly in both hot and cold liquids for convenient formulation.",
          "Integrates smoothly into powders, beverages, capsules, tablets, gummies, and sachets.",
          "Suitable for beauty nutrition, active lifestyle, healthy aging, and functional food categories.",
          "Pairs effectively with hyaluronic acid, vitamins, minerals, antioxidants, and botanical extracts.",
          "Manufactured in multiple molecular weight ranges to accommodate specialized product requirements.",
          "Recognized by formulators for its excellent solubility, dispersibility, and sensory characteristics.",
          "Meets the demands of global nutraceutical, food, and personal wellness markets.",
          "Serves as a key protein ingredient for contemporary health and beauty product innovations."
        ]
      },
      {
        name: "Chicken Collagen",
        slug: "chicken-collagen",
        bullets: [
          "Provides a natural source of collagen-derived peptides",
          "Supports connective tissue structure and flexibility",
          "Contributes to joint and cartilage wellness formulations",
          "Helps maintain skin firmness and elasticity",
          "Aids in promoting collagen production within the body",
          "Enhances nutritional value of health supplements",
          "Supports development of beauty and wellness products",
          "Offers functional benefits for mobility and tissue health",
          "Enables versatile applications in nutraceutical formulation."
        ]
      },
      {
        name: "Egg Membrane Collagen",
        slug: "egg-membrane-collagen",
        bullets: [
          "Naturally occurring matrix derived from eggshell membrane containing structural proteins and functional biomolecules.",
          "Rich in collagen fractions, glycosaminoglycans, elastin, and naturally present protein components.",
          "Fits seamlessly into beauty nutrition, active lifestyle, and healthy aging product concepts.",
          "Blends efficiently with hyaluronic acid, glucosamine, chondroitin sulfate, MSM, and vitamin complexes.",
          "Offered in customized particle sizes and specifications to accommodate diverse formulation objectives.",
          "Demonstrates excellent compatibility with capsules, tablets, sachets, gummies, stick packs, and powdered blends.",
          "Selected by product developers seeking multifunctional ingredients from sustainable natural resources.",
          "Adaptable for dietary supplements, functional nutrition, and specialized wellness formulations.",
          "Combines naturally occurring extracellular matrix components in a single ingredient system.",
          "Represents a distinctive protein-based solution for next-generation nutrition and personal wellness innovations."
        ]
      },
      {
        name: "Undenatured Collagen",
        slug: "undenatured-collagen",
        bullets: [
          "Produced using controlled processing techniques to retain the native collagen configuration.",
          "Characterized by its intact triple-helical molecular structure and functional protein profile.",
          "Incorporated into nutritional formulations requiring minimally processed collagen ingredients.",
          "Available in customized grades and specifications to meet diverse product development requirements.",
          "Integrates effectively with glucosamine, chondroitin sulfate, hyaluronic acid, MSM, and botanical extracts.",
          "Suitable for capsules, tablets, sachets, stick packs, gummies, and powdered supplement formulations.",
          "Chosen by formulators seeking native collagen for specialized wellness product concepts.",
          "Demonstrates excellent formulation compatibility across dietary supplement and functional nutrition applications.",
          "Recognized as a distinctive collagen ingredient for modern health and active lifestyle innovations.",
          "Serves as a specialized protein component for contemporary nutraceutical product development."
        ]
      },
      {
        name: "Bovine Gelatin",
        slug: "bovine-gelatin",
        bullets: [
          "Provides a rich source of collagen-derived proteins",
          "Supports development of pharmaceutical and nutraceutical formulations",
          "Enhances texture and stability of capsule-based products",
          "Offers excellent gelling and binding properties",
          "Contributes to functional food and supplement applications",
          "Provides valuable amino acids including glycine and proline",
          "Enables efficient formulation of softgel and hard capsule products",
          "Supports versatile applications in healthcare industries",
          "Improves structural properties of various formulations",
          "Delivers consistent quality for pharmaceutical and food applications"
        ]
      },
      {
        name: "Fish Gelatin",
        slug: "fish-gelatin",
        bullets: [
          "Marine-origin protein ingredient obtained through carefully controlled extraction techniques.",
          "Characterized by outstanding film-forming, binding, and thermo-reversible gel properties.",
          "Functions efficiently as a texturizing, thickening, and encapsulation material in diverse formulations.",
          "Compatible with softgel capsules, hard capsules, confectionery, desserts, dairy products, and functional foods.",
          "Exhibits excellent bloom strength and viscosity across different application requirements.",
          "Integrates smoothly with proteins, vitamins, minerals, botanical extracts, and active nutritional ingredients.",
          "Offered in customized bloom values, mesh sizes, and technical specifications for specialized manufacturing needs.",
          "Preferred by formulators seeking marine-based alternatives for pharmaceutical, food, and nutraceutical products.",
          "Demonstrates reliable dissolution characteristics suitable for modern processing technologies.",
          "Represents a multifunctional ingredient for contemporary formulation and product innovation across global industries."
        ]
      },
      {
        name: "Mucopolysaccharides",
        slug: "mucopolysaccharides",
        bullets: [
          "Complex polysaccharide compounds naturally associated with extracellular matrix structures.",
          "Composed of long-chain glycosaminoglycans with specialized biological characteristics.",
          "Incorporated into dietary supplements, functional nutrition products, and specialty formulations.",
          "Combines effectively with collagen, hyaluronic acid, glucosamine, chondroitin sulfate, and MSM.",
          "Available in customized specifications tailored to formulation and manufacturing objectives.",
          "Demonstrates excellent compatibility with capsules, tablets, sachets, powders, and beverage blends.",
          "Selected for premium formulation concepts requiring glycosaminoglycan-rich ingredients.",
          "Suitable for beauty nutrition, active lifestyle, and healthy aging product categories.",
          "Fits seamlessly into modern health, wellness, and personal care innovations.",
          "Represents a distinctive biomolecular ingredient for next-generation nutritional formulations."
        ]
      },
      {
        name: "Corn Hydrolysate Protein",
        slug: "corn-hydrolysate-protein",
        bullets: [
          "Enzymatically hydrolyzed plant protein derived from carefully processed corn sources.",
          "Characterized by a balanced peptide composition and amino acid profile.",
          "Mixes readily into nutritional powders, beverages, protein blends, and meal replacement products.",
          "Integrates efficiently with vitamins, minerals, botanical extracts, fibers, and functional ingredients.",
          "Available in customized protein levels, peptide profiles, and technical specifications.",
          "Incorporated into sports nutrition, functional foods, dietary supplements, and clinical nutrition products.",
          "Exhibits excellent dispersibility and formulation performance across multiple dosage formats.",
          "Selected by product developers seeking plant-origin protein ingredients for innovative formulations.",
          "Suitable for vegetarian and vegan nutrition product concepts.",
          "Represents a modern protein solution for contemporary food and nutraceutical product development."
        ]
      },
      {
        name: "Wheat Peptide",
        slug: "wheat-peptide",
        bullets: [
          "Produced by enzymatic hydrolysis of wheat protein to generate low molecular weight peptides.",
          "Features a balanced peptide composition designed for diverse nutritional applications.",
          "Dissolves readily in liquid systems, ensuring smooth formulation performance.",
          "Compatible with amino acids, collagen peptides, probiotics, vitamins, minerals, and botanical ingredients.",
          "Applicable to protein beverages, nutrition bars, capsules, tablets, sachets, and powdered supplements.",
          "Formulated to meet the requirements of sports nutrition, healthy aging, and daily wellness products.",
          "Offered in various peptide profiles and customized technical specifications.",
          "Maintains uniform dispersion throughout commercial blending and manufacturing processes.",
          "Adaptable to protein-fortified food products and functional nutrition concepts.",
          "Serves as a plant-origin peptide ingredient for modern nutraceutical and food innovations."
        ]
      },
      {
        name: "Pea Peptide",
        slug: "pea-peptide",
        bullets: [
          "Hydrolyzed pea protein developed for modern plant-based nutrition applications.",
          "Features a carefully balanced peptide and amino acid composition.",
          "Blends uniformly into ready-to-mix powders, beverages, nutrition bars, and supplement formulations.",
          "Integrates efficiently with probiotics, botanical ingredients, vitamins, and mineral complexes.",
          "Designed to meet the requirements of vegan and vegetarian product development.",
          "Available in different peptide specifications for specialized formulation objectives.",
          "Fits active lifestyle, sports nutrition, and daily wellness product categories.",
          "Demonstrates excellent dispersibility throughout manufacturing operations.",
          "Chosen by formulators seeking sustainable plant-origin protein ingredients.",
          "Represents a contemporary solution for protein-focused nutritional products."
        ]
      },
      {
        name: "Brown Rice Protein",
        slug: "brown-rice-protein",
        bullets: [
          "Plant-origin protein ingredient obtained from carefully processed brown rice.",
          "Characterized by a balanced amino acid composition suitable for nutritional formulations.",
          "Mixes efficiently into shakes, beverage powders, nutrition bars, capsules, and tablets.",
          "Integrates seamlessly with plant proteins, fibers, vitamins, minerals, and botanical extracts.",
          "Developed for vegan, vegetarian, and clean-label product concepts.",
          "Available in customized protein concentrations and mesh sizes.",
          "Fits sports nutrition, meal replacement, functional foods, and wellness applications.",
          "Demonstrates smooth processing characteristics during commercial production.",
          "Preferred for formulations requiring cereal-based protein ingredients.",
          "Represents a valuable component for next-generation plant nutrition products."
        ]
      },
      {
        name: "Soy Protein",
        slug: "soy-protein",
        bullets: [
          "Provides a complete plant-based protein source",
          "Delivers essential amino acids for nutritional formulations",
          "Facilitates muscle and wellness-focused applications"
        ]
      },
      {
        name: "Whey Protein",
        slug: "whey-protein",
        bullets: [
          "Enhances protein content in functional nutrition products",
          "Supports development of sports and wellness supplements",
          "Offers excellent digestibility and bioavailability",
          "Contributes to balanced dietary protein solutions",
          "Enables versatile use in nutraceutical formulations",
          "Promotes innovative health and performance products",
          "Provides reliable functionality across nutrition industries"
        ]
      }
    ]
  },
  "probiotic-fermentation-ingredients": {
    title: "Probiotic and Fermentation Ingredients",
    description:
      "Harness the power of science and nature with our premium range of probiotic and fermentation ingredients. Designed to support innovation across the food, beverage, dietary supplement, and health & wellness industries, our solutions are sourced from trusted global partners and manufactured to high standards of quality, safety, and consistency. Our portfolio is developed to help create products that meet evolving consumer expectations for health, functionality, and performance.\n\nAs we continue to expand our offerings, we are introducing a comprehensive selection of advanced probiotic strains, fermentation-derived ingredients, and specialty solutions tailored to diverse formulation needs. Whether you're developing next-generation nutritional supplements, functional foods, or wellness products, our team is committed to providing reliable ingredients, technical expertise, and responsive support to help bring your innovations to market.",
    subProducts: [
      {
        name: "Malt Extract",
        slug: "malt-extract",
        bullets: [
          "Premium-quality ingredient obtained from carefully selected malted grains through a controlled extraction process.",
          "Appreciated for its rich nutritional profile, natural flavor, and excellent processing characteristics.",
          "Widely utilized across food, beverage, fermentation, microbiological, and nutritional applications.",
          "Offers consistent composition and dependable performance for commercial manufacturing requirements.",
          "Available in powder and liquid forms to accommodate diverse formulation preferences.",
          "Produced under stringent quality management systems to ensure purity, safety, and batch-to-batch uniformity.",
          "Easily incorporated into various production processes because of its excellent solubility and handling properties.",
          "Supplied with complete technical documentation, including specifications and certificates to support quality assurance.",
          "Suitable for industrial-scale production, research laboratories, and specialized formulation projects.",
          "Backed by reliable logistics, responsive customer support, and flexible packaging options to meet global supply requirements."
        ]
      },
      {
        name: "Yeast Extract",
        slug: "yeast-extract",
        bullets: [
          "Produced through a carefully controlled autolysis process to obtain a highly functional yeast-derived ingredient.",
          "Valued for its balanced nutritional composition and broad compatibility across multiple industrial sectors.",
          "Extensively incorporated into food, biotechnology, microbiological, fermentation, and nutritional formulations.",
          "Delivers reliable quality attributes that support consistent manufacturing outcomes.",
          "Offered in various grades and physical forms to satisfy diverse processing and application requirements.",
          "Manufactured in accordance with rigorous quality standards using validated production procedures.",
          "Demonstrates excellent dispersibility and ease of incorporation into a wide range of formulation systems.",
          "Accompanied by comprehensive product specifications, analytical reports, and quality documentation.",
          "Suitable for commercial production, laboratory research, product innovation, and specialized development projects.",
          "Supported by dependable inventory management, efficient global distribution, and dedicated technical assistance."
        ]
      },
      {
        name: "Liver Extract",
        slug: "liver-extract",
        bullets: [
          "Carefully processed from premium raw materials to deliver a dependable ingredient for specialized applications.",
          "Recognized for its rich biochemical composition and suitability for research, fermentation, and microbiological use.",
          "Developed under controlled manufacturing conditions to maintain consistency throughout every production batch.",
          "Applicable across laboratory, biotechnology, pharmaceutical, and industrial formulation environments.",
          "Available in customized grades and packaging options to accommodate varied commercial requirements.",
          "Manufactured following established quality systems with comprehensive process monitoring and control.",
          "Exhibits excellent compatibility with diverse production methodologies and formulation techniques.",
          "Supplied with complete technical specifications, certificates of analysis, and supporting quality documentation.",
          "Designed to meet the expectations of organizations seeking reliable ingredients for advanced product development.",
          "Supported by responsive technical consultation, efficient order fulfillment, and a dependable global supply network."
        ]
      },
      {
        name: "Meat Extract",
        slug: "meat-extract",
        bullets: [
          "Produced from carefully selected raw materials using standardized extraction techniques to ensure reliable quality.",
          "Widely recognized as a valuable ingredient for microbiological, fermentation, biotechnology, and laboratory applications.",
          "Processed under controlled manufacturing conditions to achieve consistent composition and dependable performance.",
          "Suitable for research institutions, industrial manufacturers, and specialized formulation projects.",
          "Available in multiple specifications and packaging configurations to meet diverse customer requirements.",
          "Manufactured in compliance with stringent quality assurance protocols and established production standards.",
          "Offers excellent processing characteristics, enabling smooth integration into various manufacturing systems.",
          "Delivered with detailed product specifications, analytical documentation, and complete quality support.",
          "Preferred by organizations seeking dependable ingredients for advanced scientific and industrial applications.",
          "Supported by efficient logistics, responsive customer service, and a reliable international distribution network."
        ]
      },
      {
        name: "Lactobacillus Buchneri",
        slug: "lactobacillus-buchneri",
        bullets: [
          "High-quality probiotic bacterial strain produced under controlled fermentation processes.",
          "Widely recognized for its excellent stability in specialized microbial applications.",
          "Suitable for formulation in dietary supplements, functional nutrition, and research products.",
          "Manufactured in facilities following stringent quality management standards.",
          "Available in customized potency levels to meet diverse formulation requirements.",
          "Offers outstanding compatibility with multi-strain probiotic and synbiotic blends.",
          "Carefully processed to preserve viability throughout production and storage.",
          "Supplied in convenient powder form for capsules, sachets, tablets, and beverage mixes.",
          "Packaged using moisture-protective systems to help maintain product integrity.",
          "Ideal for global nutraceutical manufacturers seeking reliable probiotic ingredients."
        ]
      },
      {
        name: "Streptococcus Thermophilus",
        slug: "streptococcus-thermophilus",
        bullets: [
          "Lactic acid bacterial culture extensively used in probiotic, fermented dairy, and functional nutrition products.",
          "Cultivated through precision fermentation to achieve defined microbial characteristics.",
          "Offered in multiple CFU concentrations to accommodate diverse formulation requirements.",
          "Integrates efficiently into capsules, tablets, sachets, stick packs, powder blends, and dairy-based applications.",
          "Combines successfully with probiotic cultures, prebiotics, vitamins, minerals, and postbiotic ingredients.",
          "Recognized for its application in cultured dairy products, synbiotic formulations, and microbiome-focused innovations.",
          "Retains microbial viability under recommended manufacturing, handling, and storage conditions.",
          "Chosen by formulators developing functional foods, dietary supplements, and nutritional solutions.",
          "Adaptable to customized product development across global health and wellness markets.",
          "Serves as a scientifically established probiotic culture for contemporary nutrition and fermentation technologies."
        ]
      },
      {
        name: "Lactobacillus Casei",
        slug: "lactobacillus-casei",
        bullets: [
          "Well-characterized probiotic microorganism recognized for its extensive use in nutritional science.",
          "Cultivated using controlled fermentation technology to achieve defined microbial characteristics.",
          "Offered in multiple CFU strengths to accommodate diverse formulation objectives.",
          "Integrates efficiently into capsules, tablets, sachets, stick packs, gummies, and powdered supplements.",
          "Combines effectively with prebiotics, additional probiotic cultures, vitamins, minerals, and botanical ingredients.",
          "Adaptable to synbiotic formulations, fermented foods, and functional nutrition products.",
          "Developed with emphasis on microbial viability, process consistency, and formulation performance.",
          "Selected by product developers for applications requiring scientifically established probiotic cultures.",
          "Fits a broad range of dietary supplement, food, and nutritional innovation projects.",
          "Represents a trusted probiotic solution for contemporary microbiome-focused product development"
        ]
      },
      {
        name: "Bifidobacterium Adolescentis",
        slug: "bifidobacterium-adolescentis",
        bullets: [
          "Premium probiotic strain developed for advanced nutraceutical and functional nutrition applications.",
          "Produced using controlled fermentation technology to ensure exceptional purity and consistency.",
          "Available in customized CFU strengths to accommodate diverse formulation requirements.",
          "Suitable for capsules, tablets, sachets, powder blends, and functional beverage formulations.",
          "Excellent compatibility with multi-strain probiotic, synbiotic, and microbiome-focused products.",
          "Processed under optimized conditions to help maintain microbial stability and viability.",
          "Manufactured in compliance with GMP and internationally recognized quality standards.",
          "Supplied in moisture-resistant packaging to preserve product integrity during storage and transportation.",
          "Ideal for dietary supplements, functional foods, and innovative health nutrition formulations.",
          "Available with complete technical documentation, including Certificate of Analysis (COA), product specifications, and quality certifications upon request."
        ]
      },
      {
        name: "Enterococcus Faecium",
        slug: "enterococcus-faecium",
        bullets: [
          "High-quality probiotic strain manufactured using precision-controlled fermentation technology.",
          "Produced under stringent quality systems to ensure purity, consistency, and batch-to-batch reliability.",
          "Suitable for incorporation into capsules, tablets, sachets, powder blends, and functional nutrition products.",
          "Demonstrates excellent compatibility with multi-strain probiotic and synbiotic formulations.",
          "Carefully processed to support microbial stability throughout production, packaging, and storage.",
          "Manufactured in compliance with GMP and internationally recognized quality standards.",
          "Offered in flexible bulk packaging solutions for industrial, OEM, and private-label applications.",
          "Designed for research, nutraceutical, and specialized probiotic formulation applications."
        ]
      },
      {
        name: "Pediococcus Acidilactici",
        slug: "pediococcus-acidilactici",
        bullets: [
          "Lactic acid bacterial culture recognized for its application in probiotic and functional nutrition products.",
          "Developed through controlled cultivation processes to achieve defined microbial characteristics.",
          "Integrates smoothly into capsules, tablets, sachets, stick packs, powder blends, and chewable formats.",
          "Combines efficiently with prebiotics, probiotic blends, postbiotics, vitamins, minerals, and botanical extracts.",
          "Demonstrates strong formulation compatibility across dietary supplements and functional food applications.",
          "Adaptable to synbiotic concepts, fermented nutrition products, and microbiome-focused innovations.",
          "Selected by formulators seeking robust probiotic cultures for specialized nutritional solutions.",
          "Fits commercial product development ranging from daily wellness supplements to advanced nutritional formulations.",
          "Represents a scientifically established microbial ingredient for contemporary probiotic product innovation."
        ]
      },
      {
        name: "Bacillus Coagulans",
        slug: "bacillus-coagulans",
        bullets: [
          "Premium spore-forming probiotic strain manufactured using advanced fermentation technology.",
          "Produced under stringent quality controls to ensure exceptional purity, consistency, and reliability.",
          "Naturally resilient spore-forming structure offers enhanced stability during processing and storage.",
          "Suitable for capsules, tablets, sachets, powder blends, stick packs, and functional beverage applications.",
          "Compatible with multi-strain probiotic, synbiotic, and functional nutrition formulations.",
          "Supplied in moisture-resistant packaging to help maintain product integrity throughout shelf life.",
          "Ideal for nutraceutical, dietary supplement, and functional food product innovations.",
          "Supported by comprehensive technical documentation, including COA, product specifications, and quality certifications upon request."
        ]
      },
      {
        name: "Bacillus Subtilis",
        slug: "bacillus-subtilis",
        bullets: [
          "Spore-forming probiotic microorganism recognized for its durability and formulation versatility.",
          "Cultivated through controlled microbial fermentation to obtain defined biological characteristics.",
          "Features naturally resilient spores designed to withstand challenging manufacturing conditions.",
          "Available in multiple CFU concentrations to accommodate diverse product specifications.",
          "Integrates efficiently into capsules, tablets, sachets, stick packs, powder blends, and chewable formulations.",
          "Combines effectively with prebiotics, additional probiotic cultures, enzymes, vitamins, and mineral complexes.",
          "Demonstrates strong stability across processing, transportation, and extended storage environments.",
          "Selected by formulators developing probiotic supplements, functional foods, and microbiome-focused products.",
          "Suitable for synbiotic concepts, nutritional innovations, and specialized wellness formulations.",
          "Represents a robust microbial ingredient for next-generation probiotic product development."
        ]
      },
      {
        name: "Lactobacillus Brevis",
        slug: "lactobacillus-brevis",
        bullets: [
          "Probiotic bacterial culture developed for dietary supplement and functional nutrition applications.",
          "Cultivated through controlled fermentation to achieve defined microbial characteristics.",
          "Incorporates efficiently into capsules, tablets, sachets, powder blends, stick packs, and beverage mixes.",
          "Combines effectively with prebiotics, additional probiotic strains, postbiotics, and botanical ingredients.",
          "Demonstrates strong adaptability across synbiotic and microbiome-focused product concepts.",
          "Selected for nutritional innovations requiring stable probiotic cultures.",
          "Fits a broad range of wellness, digestive health, and functional food formulations.",
          "Maintains microbial viability under recommended manufacturing and storage conditions."
        ]
      },
      {
        name: "Saccharomyces Cerevisiae",
        slug: "saccharomyces-cerevisiae",
        bullets: [
          "Functional yeast culture utilized across nutraceutical, food, feed, and biotechnology industries.",
          "Produced through carefully managed fermentation to obtain uniform microbial characteristics.",
          "Available in multiple grades and technical specifications for specialized product development.",
          "Integrates seamlessly into nutritional supplements, functional foods, fermentation systems, and yeast-based formulations.",
          "Combines efficiently with probiotics, enzymes, vitamins, minerals, amino acids, and botanical extracts.",
          "Recognized for broad formulation compatibility across diverse manufacturing platforms.",
          "Selected by product developers for nutritional, fermentation, and specialty ingredient applications.",
          "Demonstrates dependable performance throughout commercial production processes.",
          "Suitable for wellness, functional nutrition, and industrial biotechnology concepts.",
          "Represents a well-established yeast ingredient for contemporary formulation and innovation projects"
        ]
      },
      {
        name: "Bacillus Clausii",
        slug: "bacillus-clausii",
        bullets: [
          "Naturally resilient spores provide enhanced stability during processing, storage, and transportation.",
          "Suitable for capsules, tablets, sachets, powder blends, stick packs, and functional beverage applications.",
          "Compatible with multi-strain probiotic, synbiotic, and functional nutrition formulations.",
          "Packaged in moisture-barrier materials to help maintain microbial viability and product integrity.",
          "Ideal for dietary supplements, functional foods, and innovative nutraceutical product development."
        ]
      },
      {
        name: "Bifidobacterium Animalis",
        slug: "bifidobacterium-animalis",
        bullets: [
          "Well-documented probiotic culture incorporated into modern nutritional formulations.",
          "Cultivated under controlled fermentation conditions to achieve defined microbial characteristics.",
          "Integrates efficiently into capsules, tablets, sachets, stick packs, gummies, and powdered supplements.",
          "Combines effectively with prebiotics, probiotic blends, vitamins, minerals, and dietary fibers.",
          "Demonstrates strong formulation compatibility across synbiotic and microbiome-focused products.",
          "Chosen for functional foods, dietary supplements, and daily wellness product concepts.",
          "Maintains microbial activity under recommended manufacturing and storage conditions.",
          "Adaptable to commercial product development across global nutrition markets.",
          "Represents a scientifically established probiotic ingredient for next-generation nutritional innovations."
        ]
      },
      {
        name: "Bifidobacterium Longum",
        slug: "bifidobacterium-longum",
        bullets: [
          "Probiotic microorganism recognized for its application in functional nutrition and dietary supplements.",
          "Developed through precision fermentation to obtain consistent microbial characteristics.",
          "Offered in customized CFU concentrations for diverse formulation objectives.",
          "Blends smoothly with prebiotics, botanical extracts, vitamins, minerals, and complementary probiotic cultures.",
          "Suitable for capsules, tablets, sachets, stick packs, chewables, and powdered formulations.",
          "Demonstrates reliable performance across synbiotic and microbiome-oriented product concepts.",
          "Selected by formulators creating innovative wellness and nutrition solutions.",
          "Accommodates specialized dietary supplement and functional food developments.",
          "Preserves microbial viability under appropriate formulation and storage practices.",
          "Represents a trusted probiotic component for contemporary health-focused product portfolios."
        ]
      },
      {
        name: "Bifidobacterium Infantis",
        slug: "bifidobacterium-infantis",
        bullets: [
          "Premium probiotic strain manufactured through advanced fermentation technology for exceptional quality and consistency.",
          "Supplied in moisture-resistant packaging to help preserve product integrity during storage and transportation."
        ]
      },
      {
        name: "Lactobacillus Bulgaricus",
        slug: "lactobacillus-bulgaricus",
        bullets: [
          "Demonstrates formulation compatibility across synbiotic, fermented food, and microbiome-focused product concepts.",
          "Retains microbial viability under recommended manufacturing, handling, and storage conditions.",
          "Chosen by product developers for functional foods, dietary supplements, and cultured nutrition applications.",
          "Accommodates customized product development for wellness, digestive nutrition, and specialty formulations.",
          "Represents a scientifically recognized probiotic culture for contemporary nutritional innovation."
        ]
      },
      {
        name: "Streptococcus Faecium",
        slug: "streptococcus-faecium",
        bullets: [
          "Integrates smoothly into capsules, tablets, sachets, stick packs, powder blends, and chewable formats.",
          "Combines efficiently with probiotic cultures, prebiotics, postbiotics, vitamins, minerals, and botanical ingredients.",
          "Adapted for dietary supplements, functional foods, synbiotic concepts, and microbiome-focused innovations.",
          "Maintains microbial activity under recommended formulation, handling, and storage conditions.",
          "Chosen by product developers for commercial nutrition and wellness applications.",
          "Fits customized formulation strategies for global nutraceutical and food markets.",
          "Represents a well-characterized probiotic culture for contemporary microbial ingredient development."
        ]
      }
    ]
  },
  "nutraceutical-pharmaceutical-ingredients": {
    title: "Nutraceutical and Pharmaceutical Ingredients",
    description:
      "Athos Collagen Pvt. Ltd. offers a comprehensive portfolio of premium nutraceutical and pharmaceutical ingredients, sourced and supplied to meet global quality standards. Our range supports dietary supplements, functional foods, pharmaceuticals, and specialized health formulations with consistent quality, purity, and reliability.",
    subProducts: [
      {
        name: "L-Glutathione",
        slug: "l-glutathione",
        bullets: [
          "Premium-quality ingredient developed for advanced nutraceutical and pharmaceutical formulations.",
          "Characterized by exceptional purity and consistent product performance.",
          "Available in customized grades and specifications to suit diverse application requirements.",
          "Easily incorporated into capsules, tablets, sachets, powder blends, and functional beverages.",
          "Demonstrates excellent compatibility with vitamins, minerals, amino acids, collagen, and botanical extracts.",
          "Suitable for innovative wellness, sports nutrition, beauty-from-within, and functional nutrition products.",
          "Manufactured using precision-controlled processing techniques to ensure product consistency.",
          "Supports flexible formulation development for domestic and international markets.",
          "Designed to meet the evolving needs of OEM, private-label, and bulk ingredient buyers.",
          "An excellent choice for premium health and nutrition product development."
        ]
      },
      {
        name: "Chondroitin Sulfate",
        slug: "chondroitin-sulfate",
        bullets: [
          "Carefully refined to deliver exceptional purity and consistent product performance.",
          "Available in customized grades and specifications to meet diverse formulation requirements.",
          "Suitable for capsules, tablets, sachets, powder blends, and functional nutrition products.",
          "Blends efficiently with glucosamine, collagen peptides, MSM, hyaluronic acid, and vitamin complexes.",
          "Ideal for developing innovative wellness, mobility, and sports nutrition formulations.",
          "Manufactured using precision-controlled production processes for dependable quality consistency.",
          "Adaptable for use in dietary supplements, functional foods, and specialized health formulations.",
          "An excellent choice for premium nutritional products designed for global markets."
        ]
      },
      {
        name: "Hyaluronic Acid",
        slug: "hyaluronic-acid",
        bullets: [
          "Premium-quality ingredient designed for advanced nutraceutical and pharmaceutical formulations.",
          "Produced with high purity to ensure consistent quality and dependable performance.",
          "Available in multiple molecular weight options and customized specifications.",
          "Suitable for capsules, tablets, sachets, powder blends, gummies, and functional beverages.",
          "Blends seamlessly with collagen peptides, vitamins, minerals, amino acids, and botanical extracts.",
          "Ideal for beauty nutrition, wellness, functional foods, and innovative dietary supplement applications.",
          "Developed using advanced manufacturing processes to deliver excellent formulation versatility.",
          "Well-suited for premium product development in health, nutrition, and personal wellness categories."
        ]
      },
      {
        name: "Methylsulfonylmethane (MSM)",
        slug: "msm",
        bullets: [
          "Organic sulfur compound developed for advanced nutraceutical and pharmaceutical applications.",
          "Characterized by exceptional purity and consistent performance across diverse formulations.",
          "Available in customized grades and particle sizes to meet specific product development requirements.",
          "Suitable for capsules, tablets, sachets, powder blends, gummies, and functional beverage formulations.",
          "Blends effectively with collagen peptides, glucosamine, chondroitin sulfate, hyaluronic acid, and vitamin complexes.",
          "Designed for innovative wellness, sports nutrition, beauty nutrition, and functional food applications.",
          "Offers excellent formulation versatility for single-ingredient as well as combination products.",
          "Supports OEM, private-label, contract manufacturing, and bulk ingredient supply requirements.",
          "Widely utilized by global manufacturers for premium dietary supplement and health nutrition products.",
          "An ideal ingredient for next-generation nutraceutical innovations requiring reliable quality and formulation flexibility."
        ]
      },
      {
        name: "Glucosamine",
        slug: "glucosamine",
        bullets: [
          "Amino sugar ingredient developed for advanced nutraceutical and pharmaceutical applications.",
          "Manufactured to deliver exceptional purity, consistency, and dependable product performance.",
          "Available in multiple grades and customized specifications to meet diverse formulation requirements.",
          "Suitable for capsules, tablets, sachets, powder blends, gummies, and functional beverage applications.",
          "Blends efficiently with chondroitin sulfate, MSM, collagen peptides, hyaluronic acid, and vitamin complexes.",
          "Ideal for wellness, active lifestyle, sports nutrition, and functional health product development.",
          "Offers excellent formulation compatibility for standalone as well as multi-ingredient nutritional products.",
          "Preferred by global nutraceutical manufacturers for premium dietary supplement formulations.",
          "An excellent choice for innovative health and nutrition products requiring high-quality functional ingredients."
        ]
      },
      {
        name: "Coenzyme Q10",
        slug: "coenzyme-q10",
        bullets: [
          "Premium-quality bioactive ingredient developed for advanced nutraceutical and pharmaceutical formulations.",
          "Produced with exceptional purity to ensure consistent quality and reliable performance.",
          "Available in customized grades and specifications to meet diverse formulation requirements.",
          "Suitable for capsules, tablets, softgels, sachets, powder blends, and functional beverage applications.",
          "Blends efficiently with vitamins, minerals, omega-3 fatty acids, amino acids, and botanical extracts.",
          "Ideal for wellness, active lifestyle, healthy aging, and functional nutrition product development.",
          "Offers excellent formulation versatility for standalone as well as multi-ingredient supplement combinations.",
          "Features excellent dispersibility and compatibility across a wide range of nutritional formulations.",
          "Widely selected by global nutraceutical brands for premium dietary supplement innovations.",
          "An ideal ingredient for developing high-value health and wellness products with superior formulation flexibility."
        ]
      },
      {
        name: "Maltodextrin",
        slug: "maltodextrin",
        bullets: [
          "Produced with high purity to deliver consistent quality and dependable formulation performance.",
          "Available in multiple dextrose equivalent (DE) grades to meet specific product requirements.",
          "Suitable for powder blends, tablets, capsules, sachets, functional beverages, and nutritional products.",
          "Provides excellent solubility, dispersibility, and flow characteristics for efficient processing.",
          "Functions as an ideal carrier, bulking agent, and processing aid in complex formulations.",
          "Compatible with proteins, vitamins, minerals, botanical extracts, amino acids, and functional ingredients.",
          "Widely utilized in sports nutrition, dietary supplements, infant nutrition, and food manufacturing.",
          "Enables smooth blending and uniform distribution across multi-ingredient formulations.",
          "An excellent choice for innovative product development requiring versatility, stability, and consistent performance."
        ]
      },
      {
        name: "Sodium Alginate",
        slug: "sodium-alginate",
        bullets: [
          "Ulte high-quality natural polysaccharide extracted from selected brown seaweed sources.",
          "Produced with exceptional purity to ensure consistent quality and reliable performance.",
          "Available in multiple viscosity grades to suit diverse formulation and processing requirements.",
          "Suitable for nutraceutical, pharmaceutical, food, beverage, and industrial applications.",
          "Delivers excellent thickening, stabilizing, gelling, and film-forming properties.",
          "Compatible with proteins, dietary fibers, botanical extracts, vitamins, minerals, and functional ingredients.",
          "Offers outstanding water-binding capacity for enhanced formulation versatility.",
          "Performs efficiently in capsules, tablets, powders, gels, suspensions, and functional food products.",
          "Preferred by formulators for developing innovative products with superior texture and processing characteristics.",
          "An ideal ingredient for next-generation formulations requiring stability, consistency, and multifunctional performance."
        ]
      },
      {
        name: "Guar Gum",
        slug: "guar-gum",
        bullets: [
          "A natural polysaccharide derived from carefully selected guar beans.",
          "Processed to deliver exceptional purity, consistency, and dependable product performance.",
          "Available in multiple viscosity grades to meet diverse formulation requirements.",
          "Suitable for nutraceutical, pharmaceutical, food, beverage, and industrial applications.",
          "Provides excellent thickening, stabilizing, binding, and emulsifying functionality.",
          "Demonstrates outstanding hydration and water-holding capacity in various formulations.",
          "Compatible with proteins, dietary fibers, botanical extracts, vitamins, minerals, and functional ingredients.",
          "Performs efficiently in tablets, capsules, powder blends, beverages, sauces, and bakery applications.",
          "Favored by formulators for developing products with improved texture, viscosity, and processing efficiency.",
          "An excellent ingredient for innovative formulations requiring multifunctional performance and formulation flexibility."
        ]
      },
      {
        name: "Bovine Colostrum Powder",
        slug: "bovine-colostrum-powder",
        bullets: [
          "Naturally derived dairy ingredient obtained from carefully selected bovine colostrum sources.",
          "Carefully processed to preserve its original nutritional profile and functional characteristics.",
          "Available in customized grades and specifications to suit diverse formulation requirements.",
          "Suitable for dietary supplements, functional foods, sports nutrition, and wellness products.",
          "Blends seamlessly with collagen peptides, proteins, probiotics, vitamins, minerals, and botanical extracts.",
          "Offers excellent dispersibility for efficient incorporation into dry mixes and beverage formulations.",
          "Compatible with capsules, tablets, sachets, stick packs, powder blends, and nutritional drinks.",
          "Widely utilized in advanced nutrition and functional ingredient applications across global markets.",
          "Delivers consistent quality and dependable performance for innovative product development."
        ]
      },
      {
        name: "Agar Agar",
        slug: "agar-agar",
        bullets: [
          "Extracted from selected species of red seaweed.",
          "Renowned for its exceptional gelling, thickening, and stabilizing properties across diverse applications.",
          "Available in multiple grades and customized specifications to meet formulation requirements.",
          "Suitable for nutraceutical, pharmaceutical, food, beverage, and specialty industrial products.",
          "Delivers excellent water-binding capacity and outstanding gel strength.",
          "Integrates efficiently with proteins, dietary fibers, plant extracts, vitamins, and functional ingredients.",
          "Ideal for capsules, gummies, desserts, confectionery, dairy alternatives, and powdered formulations.",
          "Offers excellent thermal stability and reliable performance during processing.",
          "Widely utilized by formulators for developing innovative products with superior texture and consistency.",
          "An excellent ingredient for next-generation formulations requiring versatility, functionality, and dependable performance."
        ]
      },
      {
        name: "Pectin",
        slug: "pectin",
        bullets: [
          "Widely recognized for its outstanding gelling, thickening, and stabilizing functionality.",
          "Available in multiple grades and customized specifications to suit diverse formulation requirements.",
          "Suitable for nutraceutical, pharmaceutical, food, beverage, and confectionery applications.",
          "Provides excellent texture, consistency, and moisture retention in finished products.",
          "Blends efficiently with dietary fibers, proteins, botanical extracts, vitamins, and functional ingredients.",
          "Ideal for gummies, jams, jellies, fruit preparations, beverages, capsules, and powdered formulations.",
          "Delivers reliable processing performance across a wide range of manufacturing conditions.",
          "Preferred by product developers for creating clean-label and plant-based formulations.",
          "An excellent ingredient for innovative applications requiring versatility, stability, and superior functionality."
        ]
      },
      {
        name: "Lecithin",
        slug: "lecithin",
        bullets: [
          "Multifunctional phospholipid ingredient valued for advanced formulation applications.",
          "Enhances emulsification and promotes uniform ingredient dispersion.",
          "Offered in liquid, powder, and granule variants for manufacturing flexibility.",
          "Supports stable incorporation of oil- and water-based components.",
          "Compatible with nutraceutical, pharmaceutical, food, beverage, and cosmetic formulations.",
          "Performs efficiently across tablets, capsules, instant powders, softgels, chocolates, and bakery systems.",
          "Contributes to improved processing efficiency during blending and production.",
          "Selected by formulators for complex nutritional and functional ingredient combinations.",
          "Adaptable to diverse product development strategies across global industries.",
          "Delivers dependable functionality for high-performance formulation requirements."
        ]
      },
      {
        name: "Sodium Caseinate",
        slug: "sodium-caseinate",
        bullets: [
          "Milk-derived protein ingredient recognized for its outstanding functional performance in nutritional formulations.",
          "Delivers excellent emulsification properties for stable and homogeneous product development.",
          "Exhibits high solubility, enabling smooth incorporation into a variety of liquid and powdered systems.",
          "Available in tailored specifications to accommodate diverse manufacturing requirements.",
          "Compatible with protein blends, vitamins, minerals, collagen peptides, and functional ingredients.",
          "Performs effectively in sports nutrition, meal replacement, dairy, bakery, beverage, and nutraceutical applications.",
          "Contributes to improved texture, mouthfeel, and consistency in finished formulations.",
          "Designed for seamless integration into capsules, sachets, powder blends, ready-to-mix products, and nutritional beverages.",
          "Preferred by product developers seeking reliable performance across complex formulation matrices.",
          "A versatile functional ingredient supporting innovative food, nutrition, and health product development."
        ]
      },
      {
        name: "Microcrystalline Cellulose",
        slug: "microcrystalline-cellulose",
        bullets: [
          "Highly refined cellulose ingredient engineered for superior formulation performance.",
          "Recognized for its exceptional binding and compressibility characteristics in solid dosage forms.",
          "Available in multiple particle sizes and grades to accommodate diverse processing requirements.",
          "Enables efficient tablet compression with excellent flow and uniformity.",
          "Integrates effectively with vitamins, minerals, botanical extracts, amino acids, and functional ingredients.",
          "Applicable across nutraceutical, pharmaceutical, food, and specialty formulation developments.",
          "Supports consistent blend homogeneity for enhanced manufacturing efficiency.",
          "Performs reliably in tablets, capsules, powder blends, sachets, and dry granulation systems.",
          "Selected by formulators for its versatility, stability, and processing advantages.",
          "An indispensable excipient for modern product development requiring precision, consistency, and dependable functionality."
        ]
      }
    ]
  },
  "animal-nutrition": {
    title: "Animal Nutrition",
    description:
      "Athos offers a comprehensive range of functional ingredients designed for modern animal nutrition applications. Our portfolio supports feed manufacturers, premix companies, and animal health businesses with reliable nutritional solutions focused on quality, consistency, and formulation flexibility.",
    subProducts: [
      {
        name: "Sodium Butyrate",
        slug: "sodium-butyrate",
        bullets: [
          "Short-chain fatty acid salt developed for advanced animal nutrition and feed formulation applications.",
          "Provides a stable source of butyric acid for functional feed solutions.",
          "Designed to support innovative livestock, poultry, and aquaculture nutrition programs.",
          "Available in customized specifications to meet different feed industry requirements.",
          "Compatible with premixes, compound feeds, concentrates, and specialty nutritional blends.",
          "Offers excellent handling properties for convenient incorporation into feed formulations.",
          "Manufactured with controlled processing techniques to ensure consistent product characteristics.",
          "Suitable for integration with probiotics, enzymes, vitamins, minerals, and other feed additives.",
          "Used by nutrition formulators developing performance-oriented animal feed solutions.",
          "A versatile ingredient for modern feed strategies requiring reliable functionality and formulation flexibility."
        ]
      },
      {
        name: "Calcium Butyrate",
        slug: "calcium-butyrate",
        bullets: [
          "Organic acid salt ingredient developed for advanced animal nutrition and feed additive applications.",
          "Convenient source of butyric acid in nutritional formulations.",
          "Designed for incorporation into poultry, livestock, aquaculture, and specialty feed programs.",
          "Available in customized specifications to match diverse feed manufacturing requirements.",
          "Compatible with premixes, compound feeds, concentrates, and functional feed blends.",
          "Offers excellent stability and handling characteristics during storage and processing.",
          "Integrates effectively with probiotics, enzymes, minerals, vitamins, and other nutritional additives.",
          "Utilized by feed formulators seeking reliable functional ingredients for modern animal diets.",
          "Enables flexible development of innovative feed solutions across different animal nutrition segments.",
          "A versatile calcium-based additive for advanced formulation strategies in the global feed industry"
        ]
      },
      {
        name: "Mannan Oligosaccharide",
        slug: "mannan-oligosaccharide",
        bullets: [
          "Functional prebiotic ingredient derived from specialized yeast-based sources for animal nutrition applications.",
          "Designed for inclusion in advanced feed formulations for poultry, livestock, aquaculture, and companion animals.",
          "Offers excellent compatibility with probiotics, enzymes, organic acids, vitamins, and mineral blends.",
          "Available in customized specifications to meet different feed formulation requirements.",
          "Easily incorporated into premixes, compound feeds, concentrates, and nutritional supplements.",
          "Provides valuable functional properties for modern animal feed development strategies.",
          "Demonstrates strong formulation stability across diverse feed processing conditions.",
          "Enables the creation of innovative nutritional programs focused on animal performance and feed efficiency.",
          "Selected by feed manufacturers for its versatility and compatibility with multi-ingredient solutions.",
          "An important functional component for next-generation animal nutrition formulations."
        ]
      },
      {
        name: "Amino Chelated Minerals",
        slug: "amino-chelated-minerals",
        bullets: [
          "Advanced mineral complex designed for modern animal nutrition and feed formulation applications.",
          "Combines essential minerals with amino acids to create highly functional nutritional compounds.",
          "Available in customized mineral combinations including zinc, iron, copper, manganese, and other trace elements.",
          "Developed for incorporation into poultry, livestock, aquaculture, and specialty animal feed programs.",
          "Offers excellent compatibility with premixes, concentrates, mineral mixtures, and complete feed systems.",
          "Improved formulation flexibility compared with conventional mineral sources.",
          "Suitable for integration with vitamins, enzymes, probiotics, organic acids, and other feed additives.",
          "Designed to meet the evolving requirements of precision animal nutrition programs.",
          "Enables formulators to develop balanced feed solutions with consistent mineral delivery.",
          "A versatile ingredient category for innovative animal health and nutrition product development."
        ]
      },
      {
        name: "Sodium Propionate",
        slug: "sodium-propionate",
        bullets: [
          "Organic acid salt ingredient developed for animal nutrition and feed preservation applications.",
          "Effective functional properties in modern feed formulation systems.",
          "Available in consistent specifications to meet diverse livestock and feed industry requirements.",
          "Suitable for poultry, cattle, aquaculture, and specialty animal nutrition programs.",
          "Easily incorporated into premixes, compound feeds, concentrates, and nutritional blends.",
          "Offers excellent processing compatibility across various feed manufacturing conditions.",
          "Works efficiently alongside probiotics, enzymes, vitamins, minerals, and other functional additives.",
          "Designed for formulators seeking reliable solutions for advanced feed development.",
          "Contributes to improved formulation stability and overall feed quality management.",
          "A versatile ingredient for innovative animal nutrition strategies and functional feed applications."
        ]
      },
      {
        name: "Calcium Propionate",
        slug: "calcium-propionate",
        bullets: [
          "Calcium-based feed additive developed for modern animal nutrition applications.",
          "A reliable source of propionate functionality in livestock and poultry feed systems.",
          "Manufactured in different grades to meet varied requirements of feed manufacturers.",
          "Incorporated into compound feeds, premixes, concentrates, and nutritional blends.",
          "Compatible with enzymes, probiotics, trace minerals, vitamins, and other feed components.",
          "Offers good handling characteristics for efficient processing and feed preparation.",
          "Used across poultry, dairy, cattle, aquaculture, and other animal nutrition segments.",
          "Helps formulators create balanced feed programs with functional additive solutions.",
          "Designed for integration into commercial feed production and specialty nutrition products.",
          "Delivers dependable performance for manufacturers developing animal nutrition solutions."
        ]
      },
      {
        name: "Protein Hydrolysate",
        slug: "protein-hydrolysate",
        bullets: [
          "Enzymatically processed protein ingredient designed for advanced nutrition applications.",
          "Contains smaller peptide fractions that enhance formulation versatility across multiple product categories.",
          "Available from different protein sources including marine, dairy, plant, and animal origins.",
          "Manufactured with controlled hydrolysis processes to achieve desired peptide profiles.",
          "Used in sports nutrition, dietary supplements, functional foods, and animal feed formulations.",
          "Blends efficiently with amino acids, collagen peptides, vitamins, minerals, and botanical ingredients.",
          "Offered in customized specifications including protein content, solubility, and peptide distribution.",
          "Suitable for powders, beverages, capsules, tablets, and specialized nutritional products.",
          "Selected by formulators for developing targeted protein-based nutrition solutions.",
          "Provides a reliable foundation for creating next-generation nutritional formulations."
        ]
      },
      {
        name: "Active Dry Yeast",
        slug: "active-dry-yeast",
        bullets: [
          "Dehydrated yeast ingredient produced through controlled fermentation processes for nutritional applications.",
          "Contains naturally occurring yeast cells preserved in a stable dry form for convenient handling.",
          "Available in different specifications to meet food, feed, and nutritional formulation requirements.",
          "Designed for incorporation into animal feed, bakery, fermentation, and specialty nutrition products.",
          "Provides functional yeast characteristics for diverse formulation and processing needs.",
          "Compatible with enzymes, probiotics, minerals, vitamins, and other nutritional additives.",
          "Maintains good storage stability when handled under recommended conditions.",
          "Suitable for powders, premixes, feed blends, and nutritional supplement applications.",
          "Used by formulators developing yeast-based solutions across multiple industry segments.",
          "Delivers reliable performance for manufacturers seeking functional fermentation-derived ingredients."
        ]
      }
    ]
  }
};

const ProductCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const location = useLocation();
  const categoryKey = categorySlug || "enzymes";
  const category = productCategoryData[categoryKey];

  const [activeSub, setActiveSub] = useState<string>("");
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hasInvalidHash, setHasInvalidHash] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

  // Sync hash changes and initialize starting active index/subproduct
  useEffect(() => {
    if (!category) return;
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const cleanHash = hash.replace("#", "");
        const idx = category.subProducts.findIndex((sub) => sub.slug === cleanHash);
        if (idx !== -1) {
          setActiveIdx(idx);
          setActiveSub(cleanHash);
          setHasInvalidHash(false);
        } else {
          // If subproduct hash is not found, fallback to first subproduct
          setHasInvalidHash(false);
          setActiveIdx(0);
          if (category.subProducts.length > 0) {
            const fallbackSlug = category.subProducts[0].slug;
            setActiveSub(fallbackSlug);
            window.history.replaceState(null, "", `#${fallbackSlug}`);
          }
        }
      } else {
        setHasInvalidHash(false);
        setActiveIdx(0);
        if (category.subProducts.length > 0) {
          setActiveSub(category.subProducts[0].slug);
        }
      }
    };

    handleHashScroll();

    // Listen for hashchange events
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [categoryKey, category, location.hash]);

  // Native wheel scroll listener for responsive desktop layout switcher
  useEffect(() => {
    if (!category) return;
    const container = containerRef.current;
    if (!container) return;

    const handleNativeWheel = (e: WheelEvent) => {
      // Only run switcher on desktop screens (lg: minimum 1024px width)
      if (window.innerWidth < 1024) return;

      const now = Date.now();
      // Throttle transitions to 700ms to allow smooth transitions
      if (now - lastScrollTime.current < 700) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY;
      if (direction > 0) {
        // Scroll down
        if (activeIdx < category.subProducts.length - 1) {
          e.preventDefault();
          lastScrollTime.current = now;
          setActiveIdx((prev) => {
            const nextIdx = prev + 1;
            const nextSlug = category.subProducts[nextIdx].slug;
            setActiveSub(nextSlug);
            window.history.replaceState(null, "", `#${nextSlug}`);
            return nextIdx;
          });
        }
      } else if (direction < 0) {
        // Scroll up
        if (activeIdx > 0) {
          e.preventDefault();
          lastScrollTime.current = now;
          setActiveIdx((prev) => {
            const prevIdx = prev - 1;
            const prevSlug = category.subProducts[prevIdx].slug;
            setActiveSub(prevSlug);
            window.history.replaceState(null, "", `#${prevSlug}`);
            return prevIdx;
          });
        }
      }
    };

    container.addEventListener("wheel", handleNativeWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleNativeWheel);
    };
  }, [activeIdx, category, categoryKey]);

  const handleNavClick = (slug: string, index: number) => {
    setActiveSub(slug);
    setActiveIdx(index);
    window.history.replaceState(null, "", `#${slug}`);
  };

  if (!category || hasInvalidHash) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Helmet>
        <title>{category.title} - Athos Collagen Pvt. Ltd</title>
        <meta name="description" content={category.description.slice(0, 150) + "..."} />
        <link rel="canonical" href={`https://athoscollagen.com/products/${categoryKey}`} />
      </Helmet>
      <TopHeader />
      <Navbar />

      <main className="flex-1">

        {/* Content Section */}
        <section ref={containerRef} className="py-12 bg-white lg:py-0 lg:h-[calc(100vh-110px)] lg:flex lg:items-center">
          <div className="max-w-[1290px] mx-auto px-4 xl:px-4 w-full">

            {/* Desktop / Laptop Layout: Side Navigation + Single Active Details */}
            <div className="hidden lg:flex gap-16 items-start relative w-full">

              {/* Sticky Sidebar Navigation */}
              <div className="w-[240px] shrink-0 sticky top-[110px] max-h-[calc(100vh-140px)] overflow-y-auto pr-3 custom-scrollbar">
                <nav className="flex flex-col space-y-1.5 py-1">
                  {category.subProducts.map((sub, idx) => {
                    const isSelected = activeSub === sub.slug;
                    return (
                      <button
                        key={sub.slug}
                        onClick={() => handleNavClick(sub.slug, idx)}
                        className={`text-left py-[1px] text-[15px] leading-tight font-medium transition-all ${isSelected
                          ? "text-[#66b036]"
                          : "text-[#555555] hover:text-[#1D7AA3]"
                          }`}
                      >
                        {sub.name}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Single Active Subproduct Detail view */}
              <div className="flex-1 min-h-[400px]">
                {category.subProducts[activeIdx] && (
                  <div
                    key={category.subProducts[activeIdx].slug}
                    className="animate-fade-in py-0"
                  >
                    <h2 className="text-[32px] font-semibold text-[#1D7AA3] mb-6 pb-2 border-b border-gray-100">
                      {category.subProducts[activeIdx].name}
                    </h2>

                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-1 gap-x-8 gap-y-4">
                      {category.subProducts[activeIdx].bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#555555]">
                          <span className="text-[#66b036] mt-1.5 text-[12px] flex-shrink-0">▲</span>
                          <span className="text-[16px] leading-[1.6]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile / Tablet Layout: Cards */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.subProducts.map((sub) => (
                  <div
                    key={sub.slug}
                    className="bg-white border border-[#E9ECEF] rounded-[16px] p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <h2 className="text-[22px] font-bold text-[#1D7AA3] mb-4 pb-2 border-b border-gray-100">
                        {sub.name}
                      </h2>
                      <ul className="space-y-3">
                        {sub.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[#555555]">
                            <span className="text-[#66b036] mt-1 text-[10px] flex-shrink-0">▲</span>
                            <span className="text-[14px] leading-[1.4]">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
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

export default ProductCategory;
