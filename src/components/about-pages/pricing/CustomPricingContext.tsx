import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CustomPricingContextProps {
  customPricing: any;
  setCustomPricing: React.Dispatch<React.SetStateAction<any>>;
}

const CustomPricingContext = createContext<
  CustomPricingContextProps | undefined
>(undefined);

const mockData = {
  spec: {
    cpu: 1000,
    memory: 2000000000,
    storage: 1000000000,
  },
  akash: 7.08,
  aws: 36.06,
  gcp: 39.74,
  azure: 43.26,
};

interface CustomPricingProviderProps {
  children: ReactNode;
}

export const CustomPricingProvider: React.FC<CustomPricingProviderProps> = ({
  children,
}) => {
  const [customPricing, setCustomPricing] = useState(mockData);

  useEffect(() => {}, [customPricing]);

  return (
    <CustomPricingContext.Provider value={{ customPricing, setCustomPricing }}>
      {children}
    </CustomPricingContext.Provider>
  );
};

export const useCustomPricing = () => {
  const context = useContext(CustomPricingContext);
  if (!context) {
    throw new Error(
      "useCustomPricing must be used within a CustomPricingProvider",
    );
  }
  return context;
};
