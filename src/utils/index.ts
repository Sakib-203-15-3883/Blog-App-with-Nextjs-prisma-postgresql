import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyB58rck8celC3Djpu-Blsa_hC7Jx8NGhwI",
  authDomain: "blog-app-2023-8fd9a.firebaseapp.com",
  projectId: "blog-app-2023-8fd9a",
  storageBucket: "blog-app-2023-8fd9a.appspot.com",
  messagingSenderId: "1024717387166",
  appId: "1:1024717387166:web:0286d2ef5919a2e25fd28f",
  measurementId: "G-P4CE9RXB5G"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}