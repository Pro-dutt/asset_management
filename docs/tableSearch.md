# Table Search 

## [SetQuery](./tablePagination.md) 
*This is a shared utility function documented in Pagiantion*

## generateOptions function-

limitConfig is the prop that is passed
- `options`: It is intialized as an empty array
- `start`: limitConfig?.limitStart or deafult (10,10)
- `end`: limitConfig?.limtitEnd or default (50,10)
- `step`: limitConfig?.multipleOf or default(10,10)

We will use a loop to iterate from the start till the end with step being the increment value.

During the looping the values would be passed to the `options` array having a label and a value which are string in nature. The loop's purpose is for generating range options.

The function basically creates an array of options for selecting items per page in a paginated table, with values increasing in regular steps (e.g., 10, 20, 30, 40, 50).

## getFormData function-

The function takes `data` as a parameter and processes its `filters` array if it exists. For each filter item, it:

1. Spreads all existing properties of the item
2. Adds **clearOption:true** to enable clearing the filter
3. Adds a customOnChange handler that:
    - Extracts `name` and `value` from the event target
    - Updates form values in state by preserving previous balues and setting the new name-value pair

4. Sets `defaultValue` to the current value from the `formValues` for the field (if it exists)
5. Adds styling to the input with specific padding and margin values
6. Returns the new array with enhanced filter objects

The key purpose is to enhance filter items with additional properties needed for: 
- handling
- state management
- URL parameter synchronization

## Passing of props-

### SelectField Component

The SelectField component is receiving a prop called `formField` that contains these properties:

1. `id`: "limit" - A unique identifier for the field
2. `name`: "limit" - The name attribute for the form field
3. `options`: The result of calling `generateOptions(data.limit)` - Creates an array of options with label/value pairs
4. `defaultValue`: Uses a fallback chain:
   - First tries `formValues?.["limit"]`
   - Then `data.limit?.defaultValue`
   - Falls back to "10" if neither exists
5. `onChange`: An event handler function that:
   - Extracts the `name` and `value` from `event.target`
   - Updates form values using the state setter function
   - Updates URL query parameters using the `setQueryParam` function

This is a dropdown field for selecting the number of tems to display per page in a a table or list.

### SelectField Component Prop

1. `formField`: An object containing:
   -`id`: Unique identifier for the field
   - `name`: Name attribute for the form field
   - `options`: Result of generateOptions- Array of dropdown options
   - `defaultValue`: Uses fallback chain (formValues?.["limit"] || data.limit?.defaultValue || "10")
   - `onChange`: Event handler function that updates form state and URL query params

### DynamicForm Component Props

- `formData`: Result of getFormData- Enhanced filter items with additional properties
- `formButtons`: An empty array- Likely controls which form buttons to display

### Button Component Props

- `key`: button.label- React key prop for list rendering
- `onClick`: button.onClick- Click handler function
- `variant`: button.variant- Button style variant
- `flat`: button.flat- Wheter the button has a flat style
- `className`: Combined classes for styling (component-specific and custom classes)
- `icon`:button.icon- Icon to display in the button
- `href`: button.href- URL for the button (makes it act as a link)




