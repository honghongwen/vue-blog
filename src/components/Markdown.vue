<template>
  <div v-html="data" style="margin-top: -20px"></div>
</template>


<script>
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
export default {
  props: ["content"],
  computed: {
    data() {
      return marked(this.content);
    },
  },
  mounted() {
    var rendererMD = new marked.Renderer();
    marked.setOptions({
      renderer: rendererMD,
      highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language)
          ? language
          : "plaintext";
        if (language && hljs.getLanguage(language)) {
          return (
            '<div class="hljs">' +
            hljs.highlight(validLanguage, code).value +
            "</div>"
          );
        }
        return hljs.highlight(validLanguage, code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
  },
};
</script>