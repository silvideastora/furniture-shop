export type APIDataProps = {
  ref: string | null;
  isLoading: boolean;
};

//Type para los elementos de refs
export type RefItem = {
  id: string;
  ref: string;
  label: string;
  isMasterRef: boolean;
};

// Type de la APIResponse
export type APIResponse = {
  refs: Array<RefItem>;
};
// Type para la descripcion
export type Description = {
  type: string;
  text: string;
  spans: Array<string>;
};

//Type para la imagen principal
export type MainImage = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  copyright: string | null;
  url: string;
};

//Type para los banners
export type Banner = {
  id: string;
  uid: string | null;
  url: string | null;
  link: string;
  type: string;
  href: string;
  tags: Array<string>;
  first_publication_date: string | null;
  last_publication_date: string | null;
  slugs: Array<string>;
  linked_documents: Array<string>;
  lang: string;
  alternate_languages: Array<string>;
  data: BannerData;
};

// type para la data del banner
export type BannerData = {
  title: string;
  cta_link: string;
  cta_target: string;
  description: Array<Description>;
  main_image: MainImage;
};

// Type para la response de banners
export type BannersResponse = {
  results: Array<Banner>;
  page: number;
  results_per_page: number;
  total_results_size: number;
  total_pages: number;
  next_page: string | null;
  prev_page: string | null;
  status: string;
  version: string;
  license: string;
};

//Type para las categories

export type Category = {
  id: string;
  uid: string | null;
  url: string | null;
  link: string;
  type: string;
  href: string;
  tags: Array<string>;
  first_publication_date: string | null;
  last_publication_date: string | null;
  slugs: Array<string>;
  linked_documents: Array<string>;
  lang: string;
  alternate_languages: Array<string>;
  data: CategoryData;
};

export type CategoryData = {
  name: string;
  main_image: MainImage;
  alt: string;
  copyright: string | null;
  url: string;
};

export type CategoryResponse = {
  results: Array<Category>;
  page: number;
  results_per_page: number;
  total_results_size: number;
  total_pages: number;
  next_page: string | null;
  prev_page: string | null;
  status: string;
  version: string;
  license: string;
};
//Types para los productos

export type Product = {
  id: string;
  uid: string | null;
  url: string | null;
  link: string;
  type: string;
  href: string;
  tags: Array<string>;
  first_publication_date: string | null;
  last_publication_date: string | null;
  slugs: Array<string>;
  linked_documents: Array<string>;
  lang: string;
  alternate_languages: Array<string>;
  data: ProductData;
};

export type ProductData = {
  name: string;
  sku: string;
  category: Category;
  mainimage: MainImage;
  short_description: string;
  description: Array<Description>;
  specs: Array<Spec>;
  images: Array<MainImage>;
  stock: number;
  price: number;
};

export type Spec = {
  spec_name: string;
  spec_value: string;
};
