"use client";

import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import Add from "./Add";

const CustomizeProduct = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      let variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value,
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionChange = (optionType: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: value }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value,
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionChange(option.name!, choice.description!);
              return option.name === "Color" ? (
                <li
                  key={choice.value}
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </li>
              ) : (
                <li
                  key={choice.value}
                  className="ring-1 ring-brinkpink text-brinkpink py-1 px-4 rounded-md text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#F35C7A"
                      : disabled
                        ? "#FBCFEB"
                        : "white",
                    color: selected || disabled ? "white" : "#F35C7A",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <Add
        productId={productId}
        stockNumber={selectedVariant?.stock?.quantity || 0}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
      />
    </div>
  );
};

export default CustomizeProduct;
