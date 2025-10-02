import { faculty, pastSecretaries, currentMembers } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Member {
  name: string;
  image: string;
}

interface Secretary {
  year: string;
  name?: string;
  names?: string[];
  note?: string;
  image?: string;
  images?: string[];
}

export default function WorkingBody() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            JUSRC Working Body and Advisors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated faculty advisors and student members driving undergraduate research excellence
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Faculty Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold text-foreground mb-4">Faculty Advisors</h3>
              <p className="text-muted-foreground">Experienced mentors guiding our research initiatives</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm border-card-border group" 
                  data-testid={`faculty-${index}`}
                >
                  <CardContent className="p-6">
                    {/* Image Section */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4">
                      <div className="flex justify-center py-6">
                        <Avatar className="w-32 h-32">
                          <AvatarImage 
                            src={member.image} 
                            alt={member.name}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <AvatarFallback className="w-32 h-32 text-4xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground font-medium">
                        {member.role}
                      </p>
                      {/* Professional accent line */}
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-orange mx-auto mt-4 rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Secretaries */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold text-foreground mb-4">Past Secretaries</h3>
              <p className="text-muted-foreground">Honoring the legacy of our former student leaders</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pastSecretaries.map((secretary, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm border-card-border group" data-testid={`past-secretary-${index}`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{secretary.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-orange transition-colors duration-300">
                        {secretary.year}
                      </h4>
                    </div>
                    
                    {secretary.names ? (
                      <div className="space-y-4">
                        {secretary.names.map((name, nameIndex) => (
                          <div key={nameIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                            {secretary.images && secretary.images[nameIndex] && (
                              <Avatar className="w-12 h-12 ring-2 ring-orange/20">
                                <AvatarImage src={secretary.images[nameIndex]} alt={name} className="object-cover" />
                                <AvatarFallback className="text-sm bg-gradient-to-br from-orange to-orange/80 text-white">
                                  {name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <p className="text-card-foreground text-sm font-medium">
                              {name}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-3">
                        {secretary.image && (
                          <Avatar className="w-24 h-24 ring-2 ring-orange/20">
                            <AvatarImage src={secretary.image} alt={secretary.name} className="object-cover" />
                            <AvatarFallback className="text-xl bg-gradient-to-br from-orange to-orange/80 text-white">
                              {secretary.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <p className="text-card-foreground font-semibold text-center">{secretary.name}</p>
                      </div>
                    )}
                    {secretary.note && (
                      <div className="mt-4 p-2 bg-orange/10 rounded-lg">
                        <p className="text-orange text-xs text-center font-medium">
                          {secretary.note}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Working Body */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                Current Working Body Members
              </h3>
              <p className="text-muted-foreground">Dedicated students leading research initiatives and community engagement</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {currentMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="text-center hover-elevate transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm border-card-border group overflow-hidden" 
                  data-testid={`current-member-${index}`}
                >
                  <CardContent className="p-4">
                    {/* Enhanced Avatar */}
                    <div className="relative mb-4">
                      <Avatar className="w-20 h-20 mx-auto ring-2 ring-border group-hover:ring-primary transition-all duration-300">
                        <AvatarImage 
                          src={member.image} 
                          alt={member.name}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <AvatarFallback className="text-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <h4 className="font-semibold text-card-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">Active Member</p>
                    
                    {/* Member accent line */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-orange mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-orange/10 rounded-xl"></div>
            <div className="relative bg-card/80 backdrop-blur-sm border border-card-border rounded-xl p-8 lg:p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Join Our Research Community
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Interested in contributing to undergraduate research at JIPMER? 
                  Connect with our working body members and become part of our growing research network.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-card/90 backdrop-blur-sm border border-card-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-xl">🔬</span>
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-3">Research Opportunities</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Explore ongoing projects and collaborative research initiatives
                    </p>
                  </div>
                  
                  <div className="bg-card/90 backdrop-blur-sm border border-card-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange text-xl">📚</span>
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-3">Skill Development</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Join workshops, training sessions, and mentorship programs
                    </p>
                  </div>
                  
                  <div className="bg-card/90 backdrop-blur-sm border border-card-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-xl">🤝</span>
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-3">Networking</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Connect with faculty, peers, and research professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}