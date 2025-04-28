# TypeScript Learning Project

This repository contains a comprehensive collection of TypeScript examples and concepts for learning TypeScript from basics to advanced topics.

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Advanced Types](#advanced-types)
3. [Functions](#functions)
4. [Classes and Inheritance](#classes-and-inheritance)
5. [Interfaces](#interfaces)
6. [Generics](#generics)
7. [Modules](#modules)
8. [Decorators](#decorators)
9. [Utility Types](#utility-types)

## Basic Concepts

- **Data Types** (`data_type.ts`)
  - Number, String, Boolean
  - Arrays and Tuples
  - Enums
  - Any, Void, Never
  - Type inference examples

- **Type Assertions** (`type_assertions.ts`)
  - Angle bracket syntax
  - 'as' syntax

## Advanced Types

- **Union and Intersection Types** (`advanced_type.ts`)
  - Union type examples
  - Intersection type implementation
  - Type guards and type narrowing

- **Literal Types** (`literal_type.ts`)
  - String literal types
  - Numeric literal types
  - Combined with unions

- **Mapped Types** (`mapped_type.ts`)
  - Basic syntax
  - Property modifications
  - Advanced mappings

## Functions

- **Function Types** (`function.ts`)
  - Named functions
  - Anonymous functions
  - Optional and default parameters
  - Rest parameters

- **Arrow Functions** (`arrow_function.ts`)
  - Basic syntax
  - Block body
  - Lexical scoping
  - this binding differences

## Classes and Inheritance

- **Classes** (`classes.ts`, `class.ts`)
  - Class declaration
  - Constructors
  - Properties and methods
  - Access modifiers

- **Inheritance** (`inheritance.ts`)
  - Class extension
  - Method overriding
  - Protected members
  - Abstract classes

## Interfaces

- **Interface Basics** (`interfaces.ts`)
  - Object shape declaration
  - Optional properties
  - Readonly properties
  - Interface extension

## Generics

- **Generic Types** (`generic.ts`)
  - Generic functions
  - Generic classes
  - Generic constraints
  - Generic utility types

## Modules

- **Module Systems** (`modules/`)
  - Named exports
  - Default exports
  - Module aggregation
  - Namespaces

## Decorators

- **Decorator Types** (`decorators.ts`)
  - Class decorators
  - Method decorators
  - Property decorators
  - Parameter decorators

## Utility Types

- **Built-in Utility Types** (`utility_types.ts`)
  - Partial<T>
  - Required<T>
  - Readonly<T>
  - Record<K,T>
  - Pick<T,K>
  - Omit<T,K>

## Getting Started

1. Clone this repository
2. Make sure you have TypeScript installed:
   ```bash
   npm install -g typescript
   ```
3. Compile TypeScript files:
   ```bash
   tsc filename.ts
   ```
4. Run the compiled JavaScript:
   ```bash
   node filename.js
   ```

## Project Structure

```
├── modules/
│   ├── aggressive_module.ts
│   ├── default_export.ts
│   ├── main.ts
│   ├── math_utills.ts
│   ├── name_space.ts
│   └── named_export.ts
├── js_files/           # Compiled JavaScript files
└── *.ts               # TypeScript source files
```

## Dependencies

This project uses:
- TypeScript
- Lodash (with @types/lodash for type definitions)

## Configuration

The project includes a `tsconfig.json` file with compiler options configured for:
- ES2016 target
- CommonJS modules
- Strict type checking
- Experimental decorators support
- Source maps
- Outdir to "./js_files/"

## Learning Path

For beginners, it's recommended to follow this order:
1. Start with `hello.ts` and `data_type.ts`
2. Move on to functions and interfaces
3. Explore classes and inheritance
4. Learn about generics
5. Dive into advanced types
6. Study modules and decorators
7. Master utility types and type manipulation

Each file contains detailed comments and examples to help understand the concepts better.

## Contributing

Feel free to contribute to this learning project by:
1. Adding more examples
2. Improving existing examples
3. Adding better comments
4. Creating more practical exercises