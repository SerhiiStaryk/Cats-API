export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: [
    {
      adaptability: number;
      affection_level: number;
      alt_names: string;
      child_friendly: number;
      country_code: string;
      country_codes: string;
      description: string;
      dog_friendly: number;
      energy_level: number;
      experimental: number;
      grooming: number;
      hairless: number;
      health_issues: number;
      hypoallergenic: number;
      id: string;
      indoor: number;
      intelligence: number;
      life_span: string;
      name: string;
      natural: number;
      origin: string;
      rare: number;
      reference_image_id: string;
      rex: number;
      shedding_level: number;
      short_legs: number;
      social_needs: number;
      stranger_friendly: number;
      suppressed_tail: number;
      temperament: string;
      vetstreet_url: string;
      vocalisation: 3;
      weight: { imperial: string; metric: string };
      wikipedia_url: string;
    }
  ];
}
