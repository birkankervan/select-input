# Rick and Morty Dynamic Multi Select Input

## Kullanılan Kütüphaneler

- React - Kullanıcı arayüzü oluşturmak için.
- Tailwind CSS - Hızlı ve esnek bir CSS frameworkü.
- clsx - Dinamik CSS sınıfları oluşturmak için.
- Zustand - Global state yönetimi için.
- SWR - Data fetching ve caching için.

## Notlar

- Proje geliştirilirken tasarım dosyası (`multi-select.png`) referans alınmıştır.
- Herhangi bir sorunla karşılaşıldığında [destek](www.linkedin.com/in/emre-birkan-kervan) alabilirsiniz.

## File Tree

- [public/](./select-input/public): This directory typically contains assets like images, fonts, or any files that need to be publicly accessible.
- [src/](./select-input/src): This directory is the main source directory where the project's source code resides.
  - [components/](./select-input/src/components): Contains React components used throughout the application.
    - [Hero/](./select-input/src/components/Hero): Holds components related to the hero section of the application.
      - [index.tsx](./select-input/src/components/Hero/index.tsx): Entry point for hero-related components.
    - [MultiSelect/](./select-input/src/components/MultiSelect): Components related to multi-select functionality.
      - [CharacterElement.tsx](./select-input/src/components/MultiSelect/CharacterElement.tsx): Component for character elements in multi-select.
      - [Input.tsx](./select-input/src/components/MultiSelect/Input.tsx): Component for input in multi-select.
      - [InputContainer.tsx](./select-input/src/components/MultiSelect/InputContainer.tsx): Container component for input in multi-select.
      - [ItemChip.tsx](./select-input/src/components/MultiSelect/ItemChip.tsx): Component for item chips in multi-select.
      - [MultiSelectInput.tsx](./select-input/src/components/MultiSelect/MultiSelectInput.tsx): Main component for multi-select input.
      - [RemoveButton.tsx](./select-input/src/components/MultiSelect/RemoveButton.tsx): Component for removing items in multi-select.
      - [ResultList.tsx](./select-input/src/components/MultiSelect/ResultList.tsx): Component for result list in multi-select.
      - [SelectedItems.tsx](./select-input/src/components/MultiSelect/SelectedItems.tsx): Component for selected items in multi-select.
    - [Container.tsx](./select-input/src/components/Container.tsx): Generic container component used in the application.
  - [config/](./select-input/src/config): Configuration files or constants used in the application.
    - [index.ts](./select-input/src/config/index.ts): Entry point for configuration-related files.
  - [hooks/](./select-input/src/hooks): Custom React hooks used in the application.
    - [useBackspaceDelete.ts](./select-input/src/hooks/useBackspaceDelete.ts): Hook for handling backspace deletion.
    - [useCharacters.ts](./select-input/src/hooks/useCharacters.ts): Hook for managing characters.
    - [useNavigateSelectedItems.ts](./select-input/src/hooks/useNavigateSelectedItems.ts): Hook for navigating selected items.
    - [useRemoveOnKeyPress.ts](./select-input/src/hooks/useRemoveOnKeyPress.ts): Hook for removing items on key press.
    - [useSelectableList.ts](./select-input/src/hooks/useSelectableList.ts): Hook for managing selectable lists.
  - [store/](./select-input/src/store): State management related files, Zustand.
    - [index.ts](./select-input/src/store/index.ts): Entry point for the store configuration.
  - [types/](./select-input/src/types): TypeScript type definitions used in the application.
    - [index.ts](./select-input/src/types/index.ts): Entry point for type definitions.
  - [utils/](./select-input/src/utils): Utility functions used across the application.
    - [index.ts](./select-input/src/utils/index.ts): Entry point for utility functions.
  - [App.tsx](./select-input/src/App.tsx): Main application component.
  - [index.css](./select-input/src/index.css): CSS file for styling the application.
  - [main.tsx](./select-input/src/main.tsx): Main entry point for the application.
  - [vite-env.d.ts](./select-input/src/vite-env.d.ts): TypeScript declaration file for Vite environment variables.
- [.eslintrc.cjs](./select-input/.eslintrc.cjs): ESLint configuration file.
- [.gitignore](./select-input/.gitignore): Git ignore file specifying which files and directories to ignore in version control.
- [README.md](./select-input/README.md): Markdown file containing information about the project.
- [bun.lockb](./select-input/bun.lockb): Unknown file, possibly a typo or misconfiguration.
- [index.html](./select-input/index.html): HTML entry point for the application.
- [package.json](./select-input/package.json): npm package configuration file.
- [postcss.config.js](./select-input/postcss.config.js): Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.
- [tailwind.config.js](./select-input/tailwind.config.js): Configuration file for Tailwind CSS, a utility-first CSS framework.
- [tsconfig.json](./select-input/tsconfig.json): TypeScript configuration file.
- [tsconfig.node.json](./select-input/tsconfig.node.json): TypeScript configuration file specifically for Node.js environments.
- [vite.config.ts](./select-input/vite.config.ts): Configuration file for Vite, a frontend build tool.

---

Bu proje React.js ve Typescript kullanılarak geliştirilmiştir. Umarım beğenirsiniz!
