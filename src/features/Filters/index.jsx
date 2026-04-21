import { Checkbox, Select } from 'antd';

const sortOptions = [
  { value: 'default', label: 'by default' },
  { value: 'price-asc', label: 'price: low to high' },
  { value: 'price-desc', label: 'price: high to low' },
  { value: 'title-asc', label: 'title: A to Z' },
  { value: 'title-desc', label: 'title: Z to A' },
];

export default function Filters({
  priceFrom,
  priceTo,
  discountedOnly,
  sortValue,
  showDiscountedFilter = true,
  onPriceFromChange,
  onPriceToChange,
  onDiscountedChange,
  onSortChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-8 md:gap-10">
      <div className="flex flex-wrap items-center gap-4">
        <p className="text-xl font-semibold">Price</p>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="number"
            value={priceFrom}
            onChange={(event) => onPriceFromChange(event.target.value)}
            placeholder="from"
            min="0"
            className="min-h-10 max-w-32 rounded-sm border border-gray-200 pl-4 pr-2"
          />
          <input
            type="number"
            value={priceTo}
            onChange={(event) => onPriceToChange(event.target.value)}
            placeholder="to"
            min="0"
            className="min-h-10 max-w-32 rounded-sm border border-gray-200 pl-4 pr-2"
          />
        </div>
      </div>

      {showDiscountedFilter && (
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold">Discounted items</p>
          <Checkbox
            checked={discountedOnly}
            onChange={(event) => onDiscountedChange(event.target.checked)}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <p className="text-xl font-semibold">Sorted</p>
        <Select
          value={sortValue}
          onChange={onSortChange}
          options={sortOptions}
          className="min-h-10 w-52"
        />
      </div>
    </div>
  );
}
