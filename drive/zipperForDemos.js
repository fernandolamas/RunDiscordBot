var file_system = require('fs');
var archiver = require('archiver');

let date = new Date();
let currentMonth = date.getMonth() + 1;
let regTest = /^\d{1}/.test(currentMonth.toString());
//if month is 5, it should be 05 in order to work with demos directory
if(regTest)
{
  currentMonth = "0" + currentMonth;
}
//HLTV-2103242205-stoneslide_b1.dem


async function createDemos(target,source_dir,map) {

  //target must be nameofFile.zip

  //source dir must be the folder from where it zips the files

  var output = file_system.createWriteStream(target);
  var archive = archiver('zip');

  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  archive.on('error', function (err) {
    throw err;
  });

  



  archive.pipe(output);

  // append files from a sub-directory, putting its contents at the root of archive
  //HLTV-2105242221-stoneslide_b1.dem
  archive.glob(`*${currentMonth}*${map}.dem`,{cwd:source_dir});

 /*
  archive.directory(source_dir, false);
  // append files from a sub-directory and naming it `new-subdir` within the archive
  archive.directory('subdir/', 'new-subdir');
*/
  archive.finalize();
}

module.exports = {createDemos}
