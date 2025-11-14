import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { BookOpen, Clock, GraduationCap } from 'lucide-react';
import { courses } from '../../data/mockData';

export function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [filterYear, setFilterYear] = useState<string>('all');

  const filteredCourses = filterYear === 'all' 
    ? courses 
    : courses.filter(course => course.semester.includes(`Year ${filterYear}`));

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4">Course Curriculum</h1>
          <p className="text-lg">
            Explore our comprehensive nursing curriculum designed to build your knowledge and clinical skills
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-700">Filter by Year:</span>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={filterYear === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterYear('all')}
                size="sm"
              >
                All Courses
              </Button>
              <Button
                variant={filterYear === '1' ? 'default' : 'outline'}
                onClick={() => setFilterYear('1')}
                size="sm"
              >
                Year 1
              </Button>
              <Button
                variant={filterYear === '2' ? 'default' : 'outline'}
                onClick={() => setFilterYear('2')}
                size="sm"
              >
                Year 2
              </Button>
              <Button
                variant={filterYear === '3' ? 'default' : 'outline'}
                onClick={() => setFilterYear('3')}
                size="sm"
              >
                Year 3
              </Button>
              <Button
                variant={filterYear === '4' ? 'default' : 'outline'}
                onClick={() => setFilterYear('4')}
                size="sm"
              >
                Year 4
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary">{course.code}</Badge>
                    <Badge variant="outline">{course.credits} Credits</Badge>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4 flex-grow text-sm">
                    {course.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{course.semester}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 mt-0.5" />
                      <span>{course.modules.length} modules</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => setSelectedCourse(course)}
                    variant="outline"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No courses found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      <Dialog open={selectedCourse !== null} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary">{selectedCourse.code}</Badge>
                  <Badge variant="outline">{selectedCourse.credits} Credits</Badge>
                </div>
                <DialogTitle>{selectedCourse.title}</DialogTitle>
                <DialogDescription>{selectedCourse.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <h3>Course Information</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Semester:</span>
                      <p>{selectedCourse.semester}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Credits:</span>
                      <p>{selectedCourse.credits}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h3>Course Modules</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedCourse.modules.map((module, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 text-sm pt-0.5">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
