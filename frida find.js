Interceptor.attach(Module.findExportByName(null, "strstr"), {
    onEnter: function(args) {
      this.file_name = args[1].readCString();
        
        if (/frida/i.test(this.file_name)){
            console.warn("str: ", this.file_name);
            console.log(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n\t'));
        }
    }
});