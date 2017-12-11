import vfjsGlobalMixin from '../vfjs-global';

const VueFormJsonSchemaViewer = {
  name: 'vue-form-json-schema-viewer',
  mixins: [vfjsGlobalMixin],
  computed: {
    fields() {
      return this.createFields(this.vfFields);
    },
  },
  methods: {
    createField({ component, children, props }) {
      return component
        ? this.$createElement(component, {
          props,
        }, this.createFields(children))
        : false;
    },
    createFields(fields) {
      return fields.map(this.createField).filter(field => field);
    },
  },
  created() {
    this.vfjsInitialize();
  },
  beforeDestroy() {
    this.vfjsDestroy();
  },
  render() {
    return this.$createElement(this.tag, this.fields);
  },
};

export default VueFormJsonSchemaViewer;