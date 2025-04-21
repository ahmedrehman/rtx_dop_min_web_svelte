
# NOMORE UI:  Declarative UI Abstraction: Domain-Specific UI Language

## 🎯 Vision

Create a domain-specific UI language (DSL) on top of **Svelte** and **daisyUI**. The DSL aims to declaratively define UI based on business data—abstracting designs for **reusability**, **consistency**, and **rapid iteration**.

This allows mapping from raw buisnes data (e.g. XML/JSON) to well-structured reactive UI components, wrapped in design templates.

---

## ❗ The Double Abstraction Challenge

You’re working across two abstraction layers:
1. **Raw business data**
2. **DSL-defined UI components**
3. **Underlying reactive Svelte + DaisyUI components**

> ⚠️ Reactivity is not automatic. You must **explicitly declare reactive variables and bind them**.

---

## ✅ Why Use This?
- **Quick Prototyping**: Instantly generate a presentable prototype or working product from structured data.
- **Reusable UI designs** across projects
- **Easily switch themes/designs**
- **Override components** at any level (template or config)
- **Separation of concerns**: UI separate from logic
- **Declarative structure**: easier to maintain and generate

## ✅ Outlook: Where This Can Lead

- **Editors and AI-Ready**: The structured, declarative format is ideal for visual editors, low-code platforms, and AI-driven generation or transformation of UI components.

- **Higher Abstraction**: Enables additional layers of design abstraction—for example, layout modeling, business data modeling focused purely on structure and logic, or seamless integration with AI-driven UI generation.

- **Simple Fallback**: Svelte, Tailwind, and DaisyUI provide a powerful and flexible foundation—making it easy to break out of the abstraction when needed and quickly adapt or customize individual components.


---

## 🧠 DSL Structure & Concepts

Each component is defined as a **data object**, which can be deeply nested.


# 🧪 Implementation Idea: Declarative Component Rendering Engine

---

## 🔹 Component Data Schema

```js
{
  id: "optional-id",                         // Optional component ID (defaults to tree path if not set)
  val: "Click Me" | { val, reactive },       // Plain value or reactive wrapped value
  _cmp: "button",                            // Component type
  _design: "primary",                        // Optional design variant
  _cnf: { ... }                              // Optional per-instance config or overrides
}
```

> 💡 Treat this schema as a **flat config map** with fallbacks. Start with defaults, extend as needed.

---

## 🧱 Component Hierarchy & Override Strategy

- Each component (node) contains:
  - `val`: value or reactive binding
  - `_cmp`: the type of component (e.g. `"button"`, `"input"`)
  - `_design`: optional design style (e.g. `"primary"`)
  - `_cnf`: config overrides or instance-specific logic
  - `id`: default or custom unique identifier (e.g. `"header-title"`)

---

## 🔧 Configuration Layers

| Level     | Description                                                  |
|-----------|--------------------------------------------------------------|
| Level 1   | Global default: `default_design -> component_type -> config` |
| Level 2   | Design-specific: `design -> component_type -> config`        |
| In-place  | `_cnf` in data: component-specific override                  |
| Template  | Full component replacement (custom templates/render logic)   |

---

## 🗂️ Default Component Configuration

```js
let default_types = {
  default_design: {
    page: {
      _cnf: {
        design: 'Design1',
        template: '', // override default design template
        navbar: {
          template: 'navbar1'
        }
      }
    },
    nav_header: {
      _cnf: {
        design: 'Design1',
        template: '',
        navbar: {
          template: 'navbar1'
        }
      }
    }
  }
};
```

---

## 📄 Example Page Data (Content Tree)

```js
let pagedata = {
  page: {
    _cnf: {
      type: 'page',
      id: null  // can auto-generate tree path
    },
    title: {
      txt: 'Hello World',
      content: {}, // or named fields
      actions: {
        main: {
          action_on: 'click',
          action_type: '',  // URL, LINK, ACTION
          action_val: ''
        }
      },
      _cnf: {
        type: 'TXT_H',   // maps to <h1>, <h2>, etc.
        type_HL: '1'     // heading level
      }
    }
  }
};
```

> 🔧 Every field supports rich metadata: content, actions, and overrides.

---

## 🛠️ Summary

- Start from `default_types` as your design baseline.
- Every entry in `pagedata` is a renderable component with optional `_cnf`.
- Your renderer:
  1. Matches `_cmp` and `_design` to resolve `RtxComponent`.
  2. Applies `_cnf` on top of default config.
  3. Handles reactivity if `val.reactive === true`.
  4. Optionally replaces rendering via `template`.

> 🧩 Think of the system as a DSL-powered tree renderer for reusable UI layouts.

---



### 🔹 Component Data Schema

```js
{
  id: "optional-id",              // tree id or reference
  val: "Click Me" | { val, reactive },  // value (or reactive binding)
  _cmp: "button",                 // component type
  _design: "primary",            // optional design variant
  _cnf: { ... }                  // per-instance config overrides
}

 

tip: this is just a map where extra fallback overrides go, dont immediately need to make so complex. take all this as default, and extend when used first time.

- component type  like button
  - data  is text or wrapped object with val or datasource reactive , _cnf:{}=> wrapped info about the compnent to use
  -data  has _cmp  cmp_type and design_type optional
  -data has id (= default tree id , or other)
- level1 conf: default design  -> component type  -> default settings
- level2 conf: design  -> component type -> default settings for design
- data inplace _cnf -> override on the component
- template  complete override
- later reactive content must also be declared and setup if its not the whole data but variables etc


´´´

	let default_types = {
		// defaults for each type
		default_design: {
			page: {
				_cnf: {
					design: 'Design1',
					template: '', //override default design template
					navbar: {
						// defaults
						template: 'navbar1'
					}
          //type_children:{},  // describe possible fields  if not from type
					//override or set local conf
				}
			},
      nav_header: {
        _cnf: {
          design: 'Design1',
          template: '', //override default design template
          navbar: {
            // defaults
            template: 'navbar1'
          }
        }
      },
		}
	};
/* 
	let conf = {
		// defaults
		design_conf: {
			design: 'Design1',
			template: '', //override default design template
			navbar: {
				// defaults
				template: 'navbar1'
			}
		}
	}; */

	let pagedata = {
		// defaults
		page: {
			_cnf: {
				type: 'page',
				id: null //default is tree path with numbers
				// ony override template etc
			},
			title: {
				// every content is either a string or a wrapped object with _cnf overrides, children, actions, conditions etc
				txt: 'Hello World',
				content: {}, // or named fields
				actions: {
					main: {
						action_on: 'click',
						action_type: '', // URL, LINK, ACTION, null or empty
						action_val: ''
					}
				},
				_cnf: {
          type:  'TXT_H',
          type_HL: '1', //
					//type_children:{},  // describe possible fields  if not from type
					// override or set local conf
				}
			}
		}
	};

´´´
