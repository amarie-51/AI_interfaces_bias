import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { courses, Course } from "../data/mockData";
import { BookOpen, Clock, Award } from "lucide-react";

export function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = selectedLevel === "all"
    ? courses
    : courses.filter(course => course.level === selectedLevel);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4">Courses</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Our comprehensive curriculum covers all aspects of computer science, from foundational 
          programming to advanced topics in artificial intelligence and cloud computing.
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Filter by Year:</span>
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="Year 1">Year 1</SelectItem>
              <SelectItem value="Year 2">Year 2</SelectItem>
              <SelectItem value="Year 3">Year 3</SelectItem>
              <SelectItem value="Year 4">Year 4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-gray-600">
          Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {course.code}
                </Badge>
                <Badge className="bg-gray-100 text-gray-700">
                  {course.level}
                </Badge>
              </div>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  <Award size={16} />
                  {course.credits} Credits
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="mb-4">
                <p className="flex items-center gap-2 mb-2 text-gray-700">
                  <BookOpen size={16} />
                  Key Modules:
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.modules.slice(0, 2).map((module, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {module}
                    </Badge>
                  ))}
                  {course.modules.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{course.modules.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Learn More
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {course.code}
                      </Badge>
                      <Badge className="bg-gray-100 text-gray-700">
                        {course.level}
                      </Badge>
                    </div>
                    <DialogTitle>{course.title}</DialogTitle>
                    <DialogDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Award size={16} />
                        {course.credits} Credits
                      </span>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div>
                      <h3 className="mb-2">Course Description</h3>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                    <div>
                      <h3 className="mb-2">Course Modules</h3>
                      <ul className="space-y-2">
                        {course.modules.map((module, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-gray-600">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2">Prerequisites</h3>
                      <p className="text-gray-600">
                        {course.level === 'Year 1' 
                          ? 'No prerequisites required'
                          : `Completion of ${course.level === 'Year 2' ? 'Year 1' : course.level === 'Year 3' ? 'Year 2' : 'Year 3'} core courses`}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <section className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="mb-4">Course Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3">Program Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                <span>Total of 120 credits required for graduation</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                <span>Core courses (80 credits) + Electives (40 credits)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                <span>Capstone project in final year</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3">Course Delivery</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                <span>Mix of lectures, labs, and project work</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                <span>Flexible learning options (on-campus and online)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                <span>Industry guest lectures and workshops</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
