'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var uuid = require('node-uuid');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the lovely ' + chalk.red('Owin Static') + ' generator!'
        ));

        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name?',
            default: this.appname
        },
        {
            name: 'staticWebRoot',
            message: 'What is your app\'s static file root folder?',
            default: 'public'
        }];

        this.prompt(prompts, function(props) {
            this.namespace = props.appName.replace(/[^a-zA-Z]/g, '.').replace(/\.\./g, '.').replace(/\.$/, '');
            this.staticWebRoot = props.staticWebRoot;
            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            var namespace = this.namespace;
            var staticWebRoot = this.staticWebRoot;
            var outputIndexExists = this.fs.exists(this.destinationPath(staticWebRoot + '/index.html'));
            var guid = uuid.v4();
            this.fs.copy(
                this.templatePath('_packages.config'),
                this.destinationPath('packages.config')
            );
            this.fs.copy(
                this.templatePath('web.config'),
                this.destinationPath('web.config')
            );
            if (!outputIndexExists) {
                this.fs.copy(
                    this.templatePath('index.html'),
                    this.destinationPath(staticWebRoot + '/index.html')
                );
            }
            this.fs.copyTpl(
                this.templatePath('sln.sln'),
                this.destinationPath(namespace + '.sln'), {
                    namespace: namespace,
                    guid: guid
                }
            );
            this.fs.copyTpl(
                this.templatePath('csproj.csproj'),
                this.destinationPath(namespace + '.csproj'), {
                    namespace: namespace,
                    guid: guid,
                    staticWebRoot: staticWebRoot
                }
            );
            this.fs.copyTpl(
                this.templatePath('Startup.cs'),
                this.destinationPath('Startup.cs'), {
                    namespace: namespace,
                    staticWebRoot: staticWebRoot
                }
            );

        }
    }
});
