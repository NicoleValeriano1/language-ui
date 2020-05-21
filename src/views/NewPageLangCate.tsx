import React, { useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";

import Card from "../components/card";

import { useParams, Redirect } from "react-router-dom";

import { getNewPageLangCate } from "../services/categories";


//tratando de crear un nuevo londing page about language come to category respectic 
const NewPageLangCate: React.FC = () => {
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: "",
    l: [
      {
          _id:"",
        name: "",
        description: "",
      },
    ],
  });

  useEffect(() => {
    async function getLanguages() {
      await getNewPageLangCate(id).then((r) => {
        setCategory(r);
      });
    }
    getLanguages();
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="container">
        <Subheader title={category.name} />
        <div className="row text-center">
        {category.l.map((l) => (
          <Card title={l.name}description={l.description}key={l._id}category={category.name}
            LanguageId={l._id}
          />
        ))}
       </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewPageLangCate;
//tratando de crear un nuevo londing page about categories by