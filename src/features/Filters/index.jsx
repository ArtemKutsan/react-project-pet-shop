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
  onPriceFromChange,
  onPriceToChange,
  onDiscountedChange,
  onSortChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-wrap items-center gap-4">
        <h5>Price</h5>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={priceFrom}
            onChange={(event) => onPriceFromChange(event.target.value)}
            placeholder="from"
            min="0"
            className="min-h-10 border border-gray-200 rounded-sm pl-4 pr-2 max-w-32"
          />
          <input
            type="number"
            value={priceTo}
            onChange={(event) => onPriceToChange(event.target.value)}
            placeholder="to"
            min="0"
            className="min-h-10 border border-gray-200 rounded-sm pl-4 pr-2 max-w-32"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <h5>Discounted items</h5>
        <Checkbox
          checked={discountedOnly}
          onChange={(event) => onDiscountedChange(event.target.checked)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <h5>Sorted</h5>
        <Select
          value={sortValue}
          onChange={onSortChange}
          options={sortOptions}
          className="w-52 min-h-10"
        />
      </div>
    </div>
  );
}
