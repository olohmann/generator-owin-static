'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('owin-static:app', function() {
    before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({
                'skip-install': true
            })
            .withPrompt({
                appName: 'TestProject',
                staticWebRoot: 'public'
            })
            .on('end', done);
    });

    it('creates files', function() {
        assert.file([
            'TestProject.sln',
            'TestProject.csproj',
            'Startup.cs',
            'public/index.html',
            'web.config',
            'packages.config'
        ]);
    });
});
