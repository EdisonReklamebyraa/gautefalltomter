module.exports = function(grunt) {

    var pkg = grunt.file.readJSON("package.json");

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: pkg,
        banner: grunt.file.read("{{ site.baseurl }}src/copy.js")
            .replace(/@VERSION/, pkg.version)
            .replace(/@DATE/, grunt.template.today("yyyy-mm-dd")) + "\n",
        // Task configuration.
        uglify: {
            options: {
                banner: "<%= banner %>",
                report: "min"
            },
            dist: {
                src: "<%= concat.target.dest %>",
                dest: "dist/snap.svg-min.js"
            }
        },
        concat: {
            options: {
                banner: "<%= banner %>"
            },
            target: {
                dest: "dist/snap.svg.js",
                src: [
                    "{{ site.baseurl }}node_modules/eve/eve.js",
                    "{{ site.baseurl }}src/amd-banner.js",
                    "{{ site.baseurl }}src/mina.js",
                    "{{ site.baseurl }}src/svg.js",
                    "{{ site.baseurl }}src/matrix.js",
                    "{{ site.baseurl }}src/attr.js",
                    "{{ site.baseurl }}src/attradd.js",
                    "{{ site.baseurl }}src/paper.js",
                    "{{ site.baseurl }}src/path.js",
                    "{{ site.baseurl }}src/set.js",
                    "{{ site.baseurl }}src/equal.js",
                    "{{ site.baseurl }}src/mouse.js",
                    "{{ site.baseurl }}src/filter.js",
                    "{{ site.baseurl }}src/amd-footer.js"
                ]
            }
        },
        exec: {
            dr: {
              command: "node node_modules/dr.js/dr dr.json"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-exec");

    grunt.registerTask("default", ["concat", "uglify", "exec"]);
};