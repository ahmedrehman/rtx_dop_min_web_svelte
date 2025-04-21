<script>
	import RtxNavbar from '$lib/rtx/daisy/components/RtxNavbar.svelte';
    import CardDaisy from '$lib/rtx/daisy/components/CardDaisy.svelte';
	// text model based design

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
	/*
    
 */
</script>

<RtxNavbar />

<div class="tw:p-4">
	<p class="tw:text-lg">This is a demo page using <code>RtxNavbar</code>.</p>
</div>

<CardDaisy>	</CardDaisy>
<hr />
Test Fonts:
<h1>Test Here</h1>
<div class="tw:font-sans">Sans content</div>
<div class="tw:font-serif">Serif content</div>
<div class="tw:font-mono">Serif content</div>
