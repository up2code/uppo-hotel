import { FormCheckbox } from "@/components/forms/form-checkbox";
import { useForm } from "@/components/forms/form-provider/use-form";
import { FormTextInput } from "@/components/forms/form-text-input";

export const PromotionPriceInput = () => {
  const { watch } = useForm();
  const hasPromoPrice = watch("hasPromoPrice") as boolean;

  return (
    <div className="flex flex-col md:flex-row gap-2 w-full">
      <div className="w-full">
        <div className="md:space-y-2">
          <div className="text-sm font-medium text-gray-700 h-5"></div>{" "}
          {/* Empty label space */}
          <div className="md:h-10 flex">
            <FormCheckbox label="Promotion Price" name="hasPromoPrice" />
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <FormTextInput
          name="promotionPrice"
          type="number"
          disabled={!hasPromoPrice}
        />
      </div>
    </div>
  );
};
